import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

body {
  color: black;
  background-color: black;
  font-family: 'Familjen Grotesk', sans-serif;
  transition: all 0.50s linear;
  }
`;



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

export const Box = styled.section`
  display: flex;
  flex-direction: column;

`

export const RootBox = styled(Box)`
  background-color: white;
  color: black;
  margin: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  z-index: 40;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 20rem;
    height: 32rem;
    margin-left: 4rem;
  }
`;

export const Input = styled.input`
border-radius: 50px;
border: 1px solid silver;
padding: 1.5rem;
`

export const Tilte = styled.p`
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: 2px;
`

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
  letter-spacing: 2px;
  line-height: 1.6;
`

export const Image = styled.img`
max-height: auto;
width: 6rem;
`

export const Span = styled.span`
border-radius: 50px;
border: none;
background-color: #283618;
color: white;
padding: 0.2rem 0.8rem;
`

export const LinkTag = styled.a`
  padding: 0 0.5rem;
  font-size: 1rem;
  color: #283618;

  &:hover {
    text-decoration: underline;
    font-weight: 800;
  }
`

export const FancyButton = styled.button`
  padding: 1.2rem;
  font-size: 1rem;
  width: 100%;
  font-weight: bolder;
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  box-shadow: 12px 12px 24px silver;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;

  &:hover {
    background-color: #dad7cd;
    color: black;
    transform: translateY(-6px);
  }

`;