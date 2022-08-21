import styled from "styled-components";

import { RootBox, FancyButton, Tilte, Box, Text } from "../styles/globalStyles";

const MintButton = styled(FancyButton)`
  &:hover {
    background-color: #588157;
    color: white;
  }
  
`;
const MintSection = ({ handleFormCard }) => {
  return (
    <RootBox>
      <Tilte>Quick Mint</Tilte>

      <Box>
        <Text>
          Mint an NFT in a few clicks
        </Text>
        <MintButton onClick={handleFormCard}>Continue </MintButton>
      </Box>
    </RootBox>
  );
};

export default MintSection;
