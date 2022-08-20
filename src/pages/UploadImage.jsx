import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { Box, RootBox, Input } from "../styles/globalStyles";
import DropImage from "../components/DropImage";
import { uploadFileAndCreateNFT } from "../../create-utils";
import { account } from "../../account"
import { viewNFTs, loadImage } from "../../view-utils";

const PageBox = styled(Box)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

const FormBox = styled(RootBox)`
  background-color: silver;
`;

const TextField = styled(Input)`
  height: 4rem;
  border-radius: 1rem;
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
    // await uploadFileAndCreateNFT(file, name, account);
    const nfts = viewNFTs(account);
    for (let i = 0; i < nfts.length; i++) {
      const nft = nfts[i];
      const cid = String.fromCharCode(...nft.metadata);
      if (cid.length > 1) {
        await loadImage(cid);
      }
    }
  };

  return (
    <PageBox>
      <FormBox>
        <DropImage setFile={setFile} />
        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <button disabled={disabledMint} onClick={handleMint}>
          Mint NFT
        </button>
        <Link to="/">BACK</Link>
      </FormBox>
    </PageBox>
  );
};

export default UploadImage;
