import styled from "styled-components";
import React from "react";
import { Box } from "../styles/globalStyles";
import { TokenNftInfo } from "@hashgraph/sdk";
import { viewNFTs } from "../../view-utils.js";
import { account } from "../../account.js";
import { useState, useEffect } from "react";
// const { viewNFTs } = require("../../utils.js");
// import viewNFTs from "../../utils";

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
      {nftData && nftData.map((x) => <p>nft id: {x.nftId.tokenId.num.low}</p>)}
    </RootBox>
  );
}
