import styled from "styled-components";
import React from "react";
import { Box } from "../styles/globalStyles";
import { TokenNftInfo } from "@hashgraph/sdk";
import { viewNFTs } from "../../view-utils.js";
import { account } from "../../account.js";
import { useState, useEffect } from "react";
import Modal from "../components/layout/Modal";
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
export const Item = styled.div`
  display: flex
  flex-direction: row;
  justify-content: center;
  padding: .5rem
  
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  overflow: hidden;
  padding: 2px;
`;
export default function NFTDashboard() {
  const [nftData, setNftData] = useState();
  const [cidData, setCidData] = useState([]);
  const handleNftData = async () => {
    const nfts = await viewNFTs(account);
    setNftData(nfts);
    // console.log(nfts);
    let array = [];
    for (let i = 0; i < nfts.length; i++) {
      const nft = nfts[i];
      //serialize into a string
      // console.log(nft);
      const cid = String.fromCharCode(...nft.metadata);
      // console.log(cid);
      //metadata length is always at least 1 even when empty
      if (cid.length > 1) {
        const cidFinal = await loadImage(cid);
        // console.log(loadImage(cid));
        // setCidData(cidFinal);
        // console.log(cidData);
        array.push(cidFinal);
      }
    }
    setCidData(array);
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

      <Item>{cidData && cidData.map((x) => <Image src={x} />)}</Item>
    </RootBox>
  );
}
