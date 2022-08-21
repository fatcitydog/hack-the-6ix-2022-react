import styled from "styled-components";
import { useEffect, useState } from "react";

import HeroSection from "../components/HeroSection";
import CollectWallet from "../components/CollectWallet";
import { Box } from "../styles/globalStyles";
import Modal from "../components/layout/Modal";
import MintSection from "../components/MintSection";
import Background from "../components/layout/Background";
import UploadImage from "./UploadImage";

const RootBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: grey;
  justify-content: center;
`;

const WalletTokenBox = styled(Box)`
  background-color: white;
  position: absolute;
  top: 5rem;
  right: 2rem;
  height: 3rem;
  width: 10rem;
  overflow: hidden;
  justify-content: center;
  padding: 0.5rem;
`;

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [pairingString, setPairingString] = useState("");
  const [cardOpen, setCardOpen] = useState(false);
  const [imageFormOpen, setImageFormOpen] = useState(false);

  const handleCardOpen = () => {
    setCardOpen(!cardOpen);
  };

  const handleImageFormOpen = () => {
    setImageFormOpen(!imageFormOpen);
  };

  useEffect(() => {
    //if connect with wallet
    //set(setAuth(!auth))
  });
  return (
    <RootBox>
      <Background />

      {auth ? (
        <>
          <MintSection handleImageFormOpen={handleImageFormOpen} />
          <WalletTokenBox>{pairingString}</WalletTokenBox>
          {imageFormOpen && <UploadImage />}
        </>
      ) : (
        <HeroSection handleCardOpen={handleCardOpen} />
      )}

      {cardOpen && (
        <Modal
          action={handleCardOpen}
          children={
            <CollectWallet
              handleCardOpen={handleCardOpen}
              setAuth={setAuth}
              setPairingString={setPairingString}
            />
          }
        />
      )}
    </RootBox>
  );
};

export default Home;
