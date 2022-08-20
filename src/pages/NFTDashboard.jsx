import styled from "styled-components";
import React from "react";
import { Box } from "../styles/globalStyles";
import { TokenNftInfo } from "@hashgraph/sdk";
import { viewNFTs } from "../../view-utils.js";
import { account } from "../../account.js";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";

const RootBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: grey;
  justify-content: center;
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
      {nftData &&
        nftData.map((x) => <Grid>nft id: {x.nftId.tokenId.num.low}</Grid>)}
    </RootBox>
  );
}
