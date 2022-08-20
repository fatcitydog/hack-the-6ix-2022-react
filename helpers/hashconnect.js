import { HashConnect } from "hashconnect";

const connectToWallet = async () => {
  let hashconnect = new HashConnect();

  let appData = {
    name: "Hashconnect demo",
    description: "a demo for hashconnect",
    icon: "https://static.wikia.nocookie.net/pokemon/images/8/87/Pok%C3%A9_Ball.png/revision/latest?cb=20200918005128",
  };
  let initData = await hashconnect.init(appData);
  let privateKey = initData.privKey;
  console.log(privateKey + " is the privateKey");

  let state = await hashconnect.connect();
  let topic = state.topic;

  let pairingString = hashconnect.generatePairingString(
    state,
    "testnet",
    false
  );
  hashconnect.findLocalWallets();

  hashconnect.connectToLocalWallet(pairingString);
};

export default connectToWallet;
