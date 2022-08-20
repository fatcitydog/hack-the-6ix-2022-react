import styled from "styled-components";
import React from "react";
import { Box } from "../styles/globalStyles";
import { TokenNftInfo } from "@hashgraph/sdk";
import { viewNFTs } from "../../view-utils.js";
import { account } from "../../account.js";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { loadImage } from "../../view-utils.js";

const RootBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: white;
  justify-content: center;
  display: flex;

  align-items: center;
`;
const SubBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: white;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function NFTDashboard() {
  const [nftData, setNftData] = useState();
  const [cidData, setCidData] = useState();
  const handleMint = async () => {
    const nfts = await viewNFTs(account);

    for (let i = 0; i < nfts.length; i++) {
      const nft = nfts[i];
      const cid = String.fromCharCode(...nft.metadata);
      if (cid.length > 1) {
        const cidFinal = await loadImage(cid);
        console.log(loadImage(cid));
        setCidData(cidFinal);
      }
      setNftData(nfts);
    }
    console.log(cidData);
    console.log(nftData);
  };
  useEffect(() => {
    handleMint();
  }, []);

  return (
    <RootBox>
      <div>NFTDashboard</div>
      <SubBox>
        {nftData &&
          nftData.map((x) => <p>nft id: {x.nftId.tokenId.num.low}</p>)}
        {<img style={{ height: "200px" }} src={cidData} />}
      </SubBox>
    </RootBox>
  );
}
