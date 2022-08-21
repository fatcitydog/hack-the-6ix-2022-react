import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import CollectWallet from "../components/CollectWallet";
import { Box } from "../styles/globalStyles";
import Modal from "../components/layout/Modal";
import MintSection from "../components/MintSection";
import Background from "../components/layout/Background";
import UploadImage from "./UploadImage";

const RootBox = styled(Box)`
  width: 100%;
  background-color: grey;
  justify-content: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
  }
`;

const RowBox = styled(Box)`
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const WalletTokenBox = styled(Box)`
  background-color: white;
  z-index: 50;
  height: 2rem;
  width: 12rem;
  border-radius: 15px;
  overflow: hidden;
  justify-content: center;
  padding: 2rem 1rem;
  color: black;
  &:hover {
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 10rem;
    right: 2rem;
  }
`;

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [pairingString, setPairingString] = useState("");
  const [cardOpen, setCardOpen] = useState(false);
  const [formCard, setFormCard] = useState(false);

  const handleCardOpen = () => {
    setCardOpen(!cardOpen);
  };
  const handleFormCard = () => {
    setFormCard(!formCard);
  };

  useEffect(() => {
    const key = localStorage.getItem("walletToken");
    if (key) {
      setAuth(true);
      setPairingString(key);
    }
    //if connect with wallet
  });
  return (
    <RootBox>
      <Background />

      {auth ? (
        <RowBox>
          <Link to="/dashboard">
            <WalletTokenBox>{pairingString}</WalletTokenBox>
          </Link>
          <MintSection handleFormCard={handleFormCard} />

          {formCard && <UploadImage handleFormCard={handleFormCard} />}
        </RowBox>
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
