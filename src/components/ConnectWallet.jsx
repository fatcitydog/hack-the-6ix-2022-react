import { useState } from "react";
import styled from "styled-components";

import Modal from "./layout/Modal";

// import { FancyButton } from "../styles/globalStyles";

const ConnectWallet = () => {
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <>
      <div>Connect Your Wallet</div>
      <div>Choose a wallet you want to use for the mint experience.</div>
      <button onClick={() => setCardOpen(!cardOpen)}>Wallet Connect</button>
      {cardOpen && <Modal action={() => setCardOpen(!cardOpen)} />}
    </>
  );
};

export default ConnectWallet;
