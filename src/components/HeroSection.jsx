import styled from "styled-components";

import { Tilte, Box, Text } from "../styles/globalStyles";
import { FancyButton } from "../styles/globalStyles";

export const RootBox = styled(Box)`
  background-color: white;
  color: black;
  margin: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  justify-content: space-between;
`;

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
