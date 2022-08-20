import { HashConnect } from "hashconnect";

const disconnectFromWallet = async () => {
  let hashconnect = HashConnect(true);

  hashconnect.disconnect(topic);
};

export default disconnectFromWallet;
