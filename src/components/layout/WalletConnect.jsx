import React from "react";
import connectToWallet from "../../../helpers/hashconnect";
import { useState } from "react";

export default function WalletConnect() {
  const [pairingString, setPairingString] = useState("");

  const pairingStringHandler = async () => {
    const string = await connectToWallet();
    setPairingString(string);
  };
  return (
    <>
      <div>Wallet Connect</div>
      <p>{pairingString}</p>
      <button onClick={pairingStringHandler}>Connect to Wallet</button>
    </>
  );
}
