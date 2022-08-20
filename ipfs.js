import { create } from 'ipfs-http-client'


export const uploadFile = async function(file) {
    console.log(`Uploading file ${file} to IPFS`);
    const client = create("/ip4/127.0.0.1/tcp/5001");
    const { cid } = await client.add(file);
    console.log(`File uploaded to IPFS with: ${cid}`);
    return cid;
}
