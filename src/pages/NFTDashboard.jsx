import styled from "styled-components";
import React from "react";
import { Box } from "../styles/globalStyles";
import { TokenNftInfo } from "@hashgraph/sdk";

import { viewNFTs } from "../../view-utils.js";
// const { viewNFTs } = require("../../utils.js");
// import viewNFTs from "../../utils";
const RootBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: grey;
  justify-content: center;
`;
console.log(TokenNftInfo);
export default function NFTDashboard() {
  console.log(viewNFTs);
  return (
    <RootBox>
      <div>NFTDashboard</div>
    </RootBox>
  );
}
