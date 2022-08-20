import styled from "styled-components";
import { Link } from "react-router-dom";

import { RootBox, Box } from "../styles/globalStyles";
import Background from "../components/layout/Background";

const BigBox = styled(Box)`
  height: 100vh;
  width: 100%;
  background-color: grey;
  justify-content: center;
`;

const PageNotFound = () => {
  return (
    <BigBox>
      <Background />
      <RootBox>
        Page no found
        <Link to="/">Go back to home page</Link>
      </RootBox>
    </BigBox>
  );
};

export default PageNotFound;
