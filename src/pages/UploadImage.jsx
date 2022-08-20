import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

import { Box, RootBox, Input, FancyButton } from "../styles/globalStyles";
import DropImage from "../components/DropImage";
import { uploadFileAndCreateNFT } from "../../create-utils";
import { account } from "../../account"
import { viewNFTs, loadImage } from "../../view-utils";

const moveShadow = keyframes`
  0% {box-shadow: 10px 20px 100px 20px #283618;}
  100% {box-shadow: 50px 30px 500px 50px #283618;}
`;

const PageBox = styled(Box)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled(RootBox)`
  background-color: #dad7cd;
  animation: ${moveShadow} 3s linear infinite;
`;

const MintButton = styled(FancyButton)`
  background-color: #283618;
  &:hover {
    color: black;
    background-color: #a3b18a;
  }
  &:disabled {
    background-color: #cccccc;
    color: white;
    pointer-events: none;
  }
`;

const Button = ({ disabled, onClick, children }) => {
  return (
    <MintButton disabled={disabled} onClick={onClick}>
      {children}
    </MintButton>
  );
};

const Text = styled.p`
  text-decoration: none;
  color: black;
  &:hover {
    font-weight: bold;
  }
`;

const UploadImage = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState({});
  const [disabledMint, setDisabledMint] = useState(true);

  useEffect(() => {
    if (name !== "") {
      setDisabledMint(false);
    } else {
      setDisabledMint(true);
    }
  }, [name]);

  //implement a function to mint the image to NFT
  const handleMint = async () => {
    await uploadFileAndCreateNFT(file, name, account);
  };

  return (
    <PageBox>
      <FormBox>
        <DropImage setFile={setFile} />
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <Button disabled={disabledMint} onClick={handleMint}>
          Mint NFT
        </Button>
        <Link to="/">
          <Text>BACK</Text>
        </Link>
      </FormBox>
    </PageBox>
  );
};

export default UploadImage;
