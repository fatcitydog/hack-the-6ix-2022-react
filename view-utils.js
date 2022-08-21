import {
  Client,
  TokenId,
  AccountInfoQuery,
  TokenNftInfoQuery,
  NftId,
} from "@hashgraph/sdk";
import CID from "cids";

export async function viewNFTs(account) {
  const hederaClient = Client.forTestnet().setOperator(
    account.accountId,
    account.privateKey
  );

  //Create the account info query
  const query = new AccountInfoQuery().setAccountId(account.accountId);

  //Sign with client operator private key and submit the query to a Hedera network
  console.log("- Viewing NFTs for account: " + account.accountId + "\n");
  const accountInfo = await query.execute(hederaClient);
  console.log("Got account info: ", accountInfo);

  let tokenIds = [];
  // Seems like ._map is always going to be the NFT's
  // https://hedera.com/blog/get-started-with-the-hedera-token-service-part-2-kyc-update-and-scheduled-transactions
  accountInfo.tokenRelationships._map.forEach((rel, id) => {
    // let tokenId = TokenId.fromString(id);
    // console.log(`Type of relationship: ${typeof tokenId}`);
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
        .execute(hederaClient);
      nftInfos.push(nftInfo[0]);
    } catch (err) {
      console.log(err);
    }
  }
  nftInfos.sort((a, b) => a.creationTime - b.creationTime);
  console.log(nftInfos.length);
  for (let i = 0; i < nftInfos.length; i++) {
    const nft = nftInfos[i];
    const cid = String.fromCharCode(...nft.metadata);
    if (cid.length > 1) {
      console.log("CID: " + cid);
      console.log("Length: ", cid.length);
      const url = await loadImage(cid);
      console.log("URL: " + url);
    }
  }
  return nftInfos;
}

// @james this is how you would get image url's for each NFT that has it
// const nfts = viewNFTs(account);
// for (let i = 0; i < nfts.length; i++) {
//   const nft = nfts[i];
//   const cid = String.fromCharCode(...nft.metadata);
//   if (cid.length > 1) {
//     await loadImage(cid);
//   }
// }

export async function loadImage(cid) {
  // https://docs.ipfs.tech/concepts/content-addressing/#cid-conversion
  const new_cid = new CID(cid).toV1().toString("base32");
  // console.log("New CID: " + new_cid);
  // https://ipfs.github.io/public-gateway-checker/
  const public_gateways = ["https://ipfs.io/ipfs/"];
  const url = public_gateways[0] + new_cid;
  // console.log("URL: " + url);
  return url;
}
