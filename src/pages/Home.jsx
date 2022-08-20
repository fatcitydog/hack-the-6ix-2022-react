import styled from "styled-components";
import { useState } from "react";

import HeroSection from "../components/HeroSection";
import CollectWallet from "../components/CollectWallet";
import { Box } from "../styles/globalStyles";
import Modal from "../components/layout/Modal";

const RootBox = styled(Box)`
  height: 100vh;
  background-color: grey;
  justify-content: center;
`;

const Home = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const handleCardOpen = () => {
    setCardOpen(!cardOpen);
  };
  return (
    <RootBox>
      <div>some background</div>
      <HeroSection handleCardOpen={handleCardOpen} />
      {cardOpen && (
        <Modal
          action={handleCardOpen}
          children={<CollectWallet handleCardOpen={handleCardOpen} />}
        />
      )}
    </RootBox>
  );
};

export default Home;
