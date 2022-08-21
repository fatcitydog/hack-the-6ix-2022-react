import styled from "styled-components";

import { LinkTag } from "../../styles/globalStyles";

const Box = styled.div`
  width: 100%;
  height: 10rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Link = styled(LinkTag)`
  font-size: 2rem;
  color: white;
  cursor: pointer;
  margin: 0 1rem;
`;

const Footer = () => {
  return (
    <Box>
      Create by:
      <Link target="_blank" href="https://www.linkedin.com/in/ringocheung/">
        Ringo
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/jjykim/">
        James
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/yik-tung-yeung/">
        Yik
      </Link>
    </Box>
  );
};

export default Footer;
