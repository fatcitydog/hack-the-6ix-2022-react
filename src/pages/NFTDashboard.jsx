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
  const handleMint = async () => {
    // await uploadFileAndCreateNFT(file, name, account);
    const data = await viewNFTs(account);
    setNftData(data);
    console.log(data);
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
      </SubBox>
    </RootBox>
  );
}
