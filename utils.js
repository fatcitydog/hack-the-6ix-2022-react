const { TokenCreateTransaction, 
	Client, 
	PrivateKey, 
	AccountId,
    PublicKey,
	AccountCreateTransaction, 
	Hbar,
	TokenType,
	TokenId,
	TokenSupplyType,
	TokenMintTransaction,
	AccountInfoQuery,
	TokenNftInfoQuery,
	NftId,
} = require("@hashgraph/sdk");

class Account {
    constructor(accountId, accountPrivateKey, accountPublicKey) {
        this.accountId = AccountId.fromString(accountId);
        this.privateKey = PrivateKey.fromString(accountPrivateKey);
        this.publicKey = PublicKey.fromString(accountPublicKey);
    }
}

async function createAccount(account) {

    // Create our connection to the Hedera network
    // The Hedera JS SDK makes this really easy!
    const client = Client.forTestnet();

    myAccountId, myPrivateKey, myPublicKey = account.accountId, account.accountPrivateKey, account.accountPublicKey;
    client.setOperator(myAccountId, myPrivateKey);

    //Create new keys
    const newAccountPrivateKey = await PrivateKey.generateED25519(); 
    const newAccountPublicKey = newAccountPrivateKey.publicKey;

    //Create a new account with 1,000 tinybar starting balance
    const newAccount = await new AccountCreateTransaction()
        .setKey(newAccountPublicKey)
        .setInitialBalance(Hbar.fromTinybars(1000))
        .execute(client);

    // Get the new account ID
    const getReceipt = await newAccount.getReceipt(client);
    const newAccountId = getReceipt.accountId;

    return newAccountId, newAccountPublicKey, newAccountPublicKey
}

async function createNFT(client, account, CID, tokenName, tokenSymbol) {
	//Create the NFT

	let supplyKey = PrivateKey.generate();
	let nftCreate = await new TokenCreateTransaction()
		.setTokenName(tokenName)
		.setTokenSymbol(tokenSymbol)
		.setTokenType(TokenType.NonFungibleUnique)
		.setDecimals(0)
		.setInitialSupply(0)
		.setTreasuryAccountId(account.accountId)
		.setSupplyType(TokenSupplyType.Finite)
		.setMaxSupply(1)
		.setSupplyKey(supplyKey)
		.freezeWith(client);

	//Sign the transaction with the treasury key
	let nftCreateTxSign = await nftCreate.sign(account.privateKey);

	//Submit the transaction to a Hedera network
	let nftCreateSubmit = await nftCreateTxSign.execute(client);

	//Get the transaction receipt
	let nftCreateRx = await nftCreateSubmit.getReceipt(client);

	//Get the token ID
	let tokenId = nftCreateRx.tokenId;

	//Log the token ID
	console.log(`- Created NFT with Token ID: ${tokenId} \n`);

	// Mint new NFT
	let mintTx = await new TokenMintTransaction()
		.setTokenId(tokenId)
		.setMetadata([Buffer.from(CID)])
		.freezeWith(client);

	//Sign the transaction with the supply key
	let mintTxSign = await mintTx.sign(supplyKey);

	//Submit the transaction to a Hedera network
	let mintTxSubmit = await mintTxSign.execute(client);

	//Get the transaction receipt
	let mintRx = await mintTxSubmit.getReceipt(client);

	//Log the serial number
	console.log(`- Created NFT ${tokenId} with serial: ${mintRx.serials[0].low} \n`);
	return tokenId, mintRx
}

async function viewNFTs(client, account) {
	//Create the account info query
	const query = new AccountInfoQuery()
		.setAccountId(account.accountId);

	//Sign with client operator private key and submit the query to a Hedera network
	console.log("- Viewing NFTs for account: " + account.accountId + "\n");
	const accountInfo = await query.execute(client);
	console.log("Got account info: ", accountInfo);

	let tokenIds = [];
	// Seems like ._map is always going to be the NFT's
	// https://hedera.com/blog/get-started-with-the-hedera-token-service-part-2-kyc-update-and-scheduled-transactions
	accountInfo.tokenRelationships._map.forEach((rel, id) => {
		// let tokenId = TokenId.fromString(id);
		// console.log(`Type of relationship: ${typeof tokenId}`);
		console.log(Object.keys(rel), rel.tokenId)
		tokenIds.push(id);
	});

	// We are going to assume you can only create one copy of NFT
	// so serial number is always 0
	let nftInfos = [];
	for (let i = 0; i < tokenIds.length; i++) {
		let tokenId = TokenId.fromString(tokenIds[i]);
		let nftId = new NftId(tokenId, 1);
		try {
			const nftInfo = await new TokenNftInfoQuery()
				.setNftId(nftId)
				.execute(client);	
			nftInfos.push(nftInfo);
		} catch (err) {
			console.log(err);
		}
	}
	console.log(nftInfos);
	console.log(nftInfos.length);
	return nftInfos;

}

module.exports = {
	Account,
	createAccount,
	createNFT,
	viewNFTs,
}
