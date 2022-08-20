import { Tilte, RootBox, Text } from "../styles/globalStyles";
import { FancyButton, Span } from "../styles/globalStyles";

const HeroSection = ({ handleCardOpen }) => {
  return (
    <RootBox>
      <Tilte>Connect Your Wallet</Tilte>
      <Text>
        Connect your HashPack wallet for the <Span>mint</Span> experience.
      </Text>
      <FancyButton onClick={handleCardOpen}>Wallet Connect</FancyButton>
    </RootBox>
  );
};

export default HeroSection;
