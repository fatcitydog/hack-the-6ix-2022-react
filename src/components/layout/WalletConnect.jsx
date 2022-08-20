import React from "react";
import connectToWallet from "../../../helpers/hashconnect";
import redirectToWebApp from "../../../helpers/hashconnectwebapp";
export default function WalletConnect() {
  return (
    <>
      <div>Wallet Connect</div>
      <button onClick={() => connectToWallet()}>Connect to Wallet</button>
    </>
  );
}
