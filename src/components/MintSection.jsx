import { Link } from "react-router-dom";
import styled from "styled-components";

import { Tilte, Box, Text } from "../styles/globalStyles";

import { RootBox } from "./HeroSection";

const MintSection = () => {
  return (
    <RootBox>
      <Tilte>MINT YOUR NFT</Tilte>
      <Text>in under 18 seconds</Text>
      <Box>
        <Tilte>Quick Mint</Tilte>
        <Text>
          An easy and quick minting solution for those who just want to mints a
          NFT
        </Text>
        <Link to="/upload">Continue</Link>
      </Box>
    </RootBox>
  );
};

export default MintSection;
