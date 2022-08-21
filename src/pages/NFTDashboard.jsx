import styled from "styled-components";
import React from "react";
import { Box, FancyButton } from "../styles/globalStyles";
import { viewNFTs } from "../../view-utils.js";
import { account } from "../../account.js";
import { useState, useEffect } from "react";
import { loadImage } from "../../view-utils.js";
import { Link } from "react-router-dom";
import Background from "../components/layout/Background";

const MintButton = styled(FancyButton)`
  &:hover {
    background-color: #588157;
    color: white;
  }
`;
const RootBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: grey;
  justify-content: center;
  display: flex;
  z-index: 50;
  align-items: center;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem;
`;
const Image = styled.img`
  height: 150px;
  width: 150px;
  overflow: hidden;
  padding: 2px;
  display: inline-block;
`;

const Square = styled.div`
  height: 150px;
  width: 150px;
  color: white;
`;
export default function NFTDashboard() {
  const [nftData, setNftData] = useState();
  const [cidData, setCidData] = useState([]);
  const handleNftData = async () => {
    const nfts = await viewNFTs(account);
    setNftData(nfts);

    // console.log(nfts);
    let nftArray = [];

    console.log(nfts);

    for (let i = 0; i < nfts.length; i++) {
      const nft = nfts[i];
      //serialize into a string
      // console.log(nft);
      const cid = String.fromCharCode(...nft.metadata);
      // console.log(cid);
      //metadata length is always at least 1 even when empty
      if (cid.length > 1) {
        const cidFinal = await loadImage(cid);

        console.log(loadImage(cid));
        // setCidData(cidFinal);
        nftArray.push(cidFinal);
      }
    }
    setCidData(nftArray);
  };
  // console.log(cidData);
  // console.log(nftData);
  useEffect(() => {
    handleNftData();
  }, []);
  //this function is here to make sure non-cid nfts arent rendered
  // const nftDataWithImage = nftData.filter((x) => x.metadata.length > 1);
  return (
    <RootBox>
      <Background />

      {/* {nftDataWithImage &&
        nftDataWithImage.map((x) => <p>nft id: {x.nftId.tokenId.num.low}</p>)} */}

      <Item>
        {cidData &&
          cidData.map((x, index) => (
            <Square key={index}>
              <Image src={x} />
            </Square>
          ))}
      </Item>
      <Link to="/">
        <MintButton>Back</MintButton>
      </Link>
    </RootBox>
  );
}
