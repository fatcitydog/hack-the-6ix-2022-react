import styled from "styled-components";
import { useEffect, useState } from "react";

import HeroSection from "../components/HeroSection";
import CollectWallet from "../components/CollectWallet";
import { Box } from "../styles/globalStyles";
import Modal from "../components/layout/Modal";
import MintSection from "../components/MintSection";

const RootBox = styled(Box)`
  height: 100vh;
  background-color: grey;
  justify-content: center;
`;

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  const handleCardOpen = () => {
    setCardOpen(!cardOpen);
  };

  const handleAuth = () => {
    setAuth(!auth);
  };

  useEffect(() => {
    //if connect with wallet
    //set(setAuth(!auth))
  });
  return (
    <RootBox>
      <div>some background</div>

      {auth ? <MintSection /> : <HeroSection handleCardOpen={handleCardOpen} />}

      {cardOpen && (
        <Modal
          action={handleCardOpen}
          children={
            <CollectWallet
              handleCardOpen={handleCardOpen}
              handleAuth={handleAuth}
            />
          }
        />
      )}
    </RootBox>
  );
};

export default Home;
