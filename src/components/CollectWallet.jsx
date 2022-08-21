import styled from "styled-components";

import connectToWallet from "../../helpers/hashconnect";
import { FancyButton, LinkTag, Box, Text } from "../styles/globalStyles";

const RootBox = styled(Box)`
  height: 20rem;
  width: 30rem;
  align-items: center;
  justify-content: space-around;
  margin: 3rem 0;
`;

const ConnectButton = styled(FancyButton)`
  width: 15rem;
`;

const MinorText = styled(Text)`
  padding: 1.2rem;
  font-size: 1rem;
  color: silver;
`;

const CollectWallet = ({ handleCardOpen, setPairingString, setAuth }) => {
  const pairingStringHandler = async () => {
    try {
      const string = await connectToWallet();
      if (string) {
        setPairingString(string);
        localStorage.setItem("walletToken", string);
        setAuth(true);
        handleCardOpen();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <RootBox>
      <Text>
        HashPack is the gateway for Hedera dApps, DeFi and NFTs. Powered by
        Hedera Hashgraph.
      </Text>

      <ConnectButton onClick={pairingStringHandler}>Connect</ConnectButton>
      <MinorText>
        No Account?
        <LinkTag target="_blank" href="https://www.hashpack.app/">
          Register
        </LinkTag>
        Now!
      </MinorText>
    </RootBox>
  );
};

export default CollectWallet;
