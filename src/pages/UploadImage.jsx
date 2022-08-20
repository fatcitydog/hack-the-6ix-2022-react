import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { Box, RootBox, Input } from "../styles/globalStyles";
import DropImage from "../components/DropImage";

const PageBox = styled(Box)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled(RootBox)`
  height: 40rem;
  width: 30rem;
  background-color: silver;
`;

const TextField = styled(Input)`
  height: 8rem;
  border-radius: 1rem;
`;

const UploadImage = () => {
  const [image, setIamge] = useState({
    name: "",
    description: "",
    imageUrl: "",
  });
  const [disabledMint, setDisabledMint] = useState(true);

  useEffect(() => {
    if (image.name !== "" && image.description !== "") {
      setDisabledMint(false);
    } else {
      setDisabledMint(true);
    }
  }, [image]);

  return (
    <PageBox>
      <FormBox>
        <DropImage setIamge={setIamge} />

        <Input
          placeholder="Name"
          onChange={(e) =>
            setIamge({
              ...image,
              name: e.target.value,
            })
          }
        />
        <TextField
          placeholder="Picture Description"
          onChange={(e) =>
            setIamge({
              ...image,
              description: e.target.value,
            })
          }
        />

        <button disabled={disabledMint}>Mint NFT</button>
        <Link to="/">BACK</Link>
      </FormBox>
    </PageBox>
  );
};

export default UploadImage;
