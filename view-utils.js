import { 
	Client,
	TokenId,
	AccountInfoQuery,
	TokenNftInfoQuery,
	NftId,
} from "@hashgraph/sdk";

export async function viewNFTs(account) {
    const client = Client.forTestnet().setOperator(
        account.accountId, account.privateKey
    );

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
	console.log(nftInfos[0].metadata)
	return nftInfos;

}
