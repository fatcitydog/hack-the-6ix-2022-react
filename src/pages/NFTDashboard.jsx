import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Box, FancyButton, Text } from "../styles/globalStyles";
import { viewNFTs } from "../../view-utils.js";
import { account } from "../../account.js";
import { loadImage } from "../../view-utils.js";
import { Loading } from "../components/layout/Modal";
import Background from "../components/layout/Background";
import timeDifference from "../../time";

const MintButton = styled(FancyButton)`
  width: 8rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  &:hover {
    background-color: #588157;
    color: white;
  }
`;

const ImageBox = styled(Box)`
  z-index: 50;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
`;

const RootBox = styled(Box)`
  width: 100%;
  background-color: grey;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  padding: 0.5rem;
`;
const Image = styled.img`
  height: 10rem;
  width: 10rem;
  overflow: hidden;
  padding: 2px;
  display: inline-block;
`;

const Square = styled(RootBox)`
  height: 18rem;
  width: 14rem;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 15px;
  background: white;
`;
export default function NFTDashboard() {
  const [nftData, setNftData] = useState([]);
  const [cidData, setCidData] = useState([]);

  const handleNftData = async () => {
    const nfts = await viewNFTs(account);
    setNftData(nfts);

    let nftArray = [];

    for (let i = 0; i < nfts.length; i++) {
      const nft = nfts[i];
      //serialize into a string
      const cid = String.fromCharCode(...nft.metadata);

      //metadata length is always at least 1 even when empty
      if (cid.length > 1) {
        const cidFinal = await loadImage(cid);

        nftArray.push(cidFinal);
      }
    }
    setCidData(nftArray);
  };

  useEffect(() => {
    handleNftData();
  }, []);
  //this function is here to make sure non-cid nfts arent rendered
  const nftDataWithImage = nftData.filter((x) => x.metadata.length > 1);

  const mergedArr = nftDataWithImage.map((element, index) => {
    return {
      //this is the IPFS info added to the existing nftData
      cid: cidData[index],
      ...element,
    };
  });
  console.log(mergedArr);

  return (
    <RootBox>
      <Background />

      <ImageBox>
        {mergedArr.length > 0 ? (
          <Item>
            {mergedArr.map((cidLink, index) => (
              <Square key={index}>
                <Image
                  // wait until image loads, otherwise show error message
                  src={cidLink.cid ? cidLink.cid : "image not loaded yet"}
                />
                <Text>
                  ID: {cidLink.nftId.tokenId.num.low} <br />
                  Date Created:
                  <br />
                  {timeDifference(cidLink.creationTime.seconds.low)}
                </Text>
              </Square>
            ))}
          </Item>
        ) : (
          <Loading />
        )}
        <Link to="/">
          <MintButton>Back</MintButton>
        </Link>
      </ImageBox>
    </RootBox>
  );
}
