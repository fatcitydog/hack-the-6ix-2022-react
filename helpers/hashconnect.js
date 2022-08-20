import { HashConnect } from "hashconnect";

const connectToWallet = async () => {
  let hashconnect = new HashConnect(true);

  let appData = {
    name: "Hack the 6ix Hack",
    description:
      "a demo for hack the 6ix hackathon using Hedera and hashconnect",
    icon: "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/044/308/datas/original.png",
  };
  let initData = await hashconnect.init(appData);
  let encryptionKey = initData.encryptionKey;
  console.log(encryptionKey + " is the privateKey");

  let state = await hashconnect.connect();
  let topic = state.topic;

  let pairingString = hashconnect.generatePairingString(
    state,
    "testnet",
    false
  );

  console.log(pairingString);
  hashconnect.findLocalWallets()
    ? hashconnect.findLocalWallets()
    : window.open("https://wallet.hashpack.app/login/signin", "_blank");

  hashconnect.connectToLocalWallet(pairingString);
  return pairingString;
};

export default connectToWallet;
