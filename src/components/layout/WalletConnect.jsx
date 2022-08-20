import React from "react";
import connectToWallet from "../../../helpers/hashconnect";
export default function WalletConnect() {
  return (
    <>
      <div>Wallet Connect</div>
      <button onClick={() => connectToWallet()}>Connect to Wallet</button>
    </>
  );
}
