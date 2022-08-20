import styled from "styled-components";

import { Tilte, RootBox, Text } from "../styles/globalStyles";
import { FancyButton } from "../styles/globalStyles";



const HeroSection = ({ handleCardOpen }) => {
  return (
    <RootBox>
      <Tilte>Connect Your Wallet</Tilte>
      <Text>Choose a wallet you want to use for the mint experience.</Text>
      <button onClick={handleCardOpen}>Wallet Connect</button>
    </RootBox>
  );
};

export default HeroSection;
