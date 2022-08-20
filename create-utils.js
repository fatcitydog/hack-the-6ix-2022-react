import { TokenCreateTransaction, 
	Client, 
	PrivateKey, 
	TokenType,
	TokenSupplyType,
	TokenMintTransaction,
} from "@hashgraph/sdk";
import { client } from "./ipfs";

export const uploadFileAndCreateNFT = async function(file, name, account) {
    console.log(`Uploading file ${file} to IPFS`);
    console.log(file);
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    let result;
    fr.onload = async function() {
        console.log("Reading file");
        console.log(fr.result);
        result = await client.add(
            {
                path: file.name,
                content: fr.result,
            }
        );
        console.log("Result");
        console.log(result);
        console.log("CID");
        const cid = result.cid;
        console.log(cid.toString());
        await createNFT(account, cid.toString(), name, name);
        return cid;
    }
    return fr;
}

async function createNFT(account, CID, tokenName, tokenSymbol) {
	//Create the NFT

    const client = Client.forTestnet().setOperator(
        account.accountId, account.privateKey
    );

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