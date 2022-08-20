const { TokenCreateTransaction, 
	Client, 
	PrivateKey, 
	AccountId,
    PublicKey,
	AccountCreateTransaction, 
	Hbar,
	TokenType,
	TokenSupplyType,
	TokenMintTransaction,
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
		.setMaxSupply(250)
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

async function viewNFT(client, account) {
	// Not yet implemented
}

module.exports = {
	Account,
	createAccount,
	createNFT
}