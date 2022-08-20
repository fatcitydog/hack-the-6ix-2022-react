import { HashConnect } from "hashconnect";

const connectToWallet = async () => {
  let hashconnect = new HashConnect();

  let appData = {
    name: "Hashconnect demo",
    description: "a demo for hashconnect",
    icon: "https://static.wikia.nocookie.net/pokemon/images/8/87/Pok%C3%A9_Ball.png/revision/latest?cb=20200918005128",
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
};

export default connectToWallet;
