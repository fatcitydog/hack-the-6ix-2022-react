import styled from "styled-components";
import React from "react";
import { Box } from "../styles/globalStyles";
import { TokenNftInfo } from "@hashgraph/sdk";
import { viewNFTs } from "../../view-utils.js";
import { account } from "../../account.js";
import { useState, useEffect } from "react";
import Modal from "../components/layout/Modal";
import { Grid } from "@mui/material";
import { loadImage } from "../../view-utils.js";
import Background from "../components/layout/Background";

const RootBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: white;
  justify-content: center;
  display: flex;

  align-items: center;
`;
const Title = styled(Box)`
  font-size: 3em;
  // margin-bottom: 500px;
`;
const BigCard = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 2px 2px 2px grey;
  border-radius: 15px;
  height: 50vh;
  width: 100%;
  max-width: 1000px;
  transform: translate(-50%, -50%) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  @media screen and (min-width: 768px) {
    width: 35rem;
    height: 25rem;
  }
`;

export default function NFTDashboard() {
  const [nftData, setNftData] = useState();
  const [cidData, setCidData] = useState([]);
  const handleNftData = async () => {
    const nfts = await viewNFTs(account);
    setNftData(nfts);
    // console.log(nfts);
    let nftArry = [];
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
        nftArry.push(cidFinal);
      }
    }
    console.log("nftArry", nftArry);
    setNftData(nftArry);
    console.log(nftData);
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

      {/* {nftData &&
          nftData.map((x) => <p>nft id: {x.nftId.tokenId.num.low}</p>)} */}
      <BigCard>
        {cidData && <img style={{ height: "200px" }} src={cidData} />}
      </BigCard>
    </RootBox>
  );
}
