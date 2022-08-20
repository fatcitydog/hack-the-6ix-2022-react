import { Link } from "react-router-dom";
import styled from "styled-components";

import { RootBox, Tilte, Box, Text } from "../styles/globalStyles";


const SubTitle = styled(Tilte)`
  font-size: 1.5rem;
`;

const MintSection = () => {
  return (
    <RootBox>
      <Tilte>MINT YOUR NFT</Tilte>
      <Text>in under 18 seconds</Text>
      <Box>
        <SubTitle>Quick Mint</SubTitle>
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
