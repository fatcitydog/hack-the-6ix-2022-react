import connectToWallet from "../../helpers/hashconnect";
import { useState } from "react";

const CollectWallet = ({ handleCardOpen, setPairingString, setAuth }) => {
  const pairingStringHandler = async () => {
    try {
      const string = await connectToWallet();
      if (string) {
        console.log("connect!");
        setPairingString(string);

        //should have a way to match the string with the user?
        setAuth(true);

        handleCardOpen();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      login with:
      <button onClick={pairingStringHandler}>Connect</button>
    </div>
  );
};

export default CollectWallet;
