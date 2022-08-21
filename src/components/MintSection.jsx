import styled from "styled-components";

import { RootBox, FancyButton, Tilte, Box, Text } from "../styles/globalStyles";

const SubTitle = styled(Tilte)`
  font-size: 1.5rem;
  color: #588157;
`;

const MintButton = styled(FancyButton)`
  &:hover {
    background-color: #588157;
    color: white;
  }
`;
const MintSection = ({ handleImageFormOpen }) => {
  return (
    <RootBox>
      <Tilte>MINT YOUR NFT</Tilte>

      <Box>
        <SubTitle>Quick Mint</SubTitle>
        <Text>
          An easy and quick minting solution for those who just want to mints a
          NFT
        </Text>

        <MintButton onClick={handleImageFormOpen}>Continue </MintButton>
      </Box>
    </RootBox>
  );
};

export default MintSection;
