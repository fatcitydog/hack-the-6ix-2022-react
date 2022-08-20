import connectToWallet from "../../helpers/hashconnect";
import { useState } from "react";

const CollectWallet = ({ handleCardOpen }) => {
  const [pairingString, setPairingString] = useState("");

  const pairingStringHandler = async () => {
    const string = await connectToWallet();
    setPairingString(string);
  };
  // not sure what to do with these functions sorry
  // const connectWithWallet = async () => {
  //   const data = "data";

  //   return data;
  // };

  // const handleConnectWallet = async () => {
  //   try {
  //     const data = await connectWithWallet();
  //     if (data) {
  //       console.log("connect!");
  //       handleCardOpen();
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      pairingString:
      {pairingString}
      login with:
      <button onClick={pairingStringHandler}> connect</button>
    </div>
  );
};

export default CollectWallet;
