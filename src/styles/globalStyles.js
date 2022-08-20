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
  font-size: 3rem;
  font-weight: 600;
  margin: 1rem 0;
  letter-spacing: 2px;
`

export const Text = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
  letter-spacing: 1px;
`

export const Image = styled.img`
max-height: auto;
width: 6rem;
`


const ring = keyframes`
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
`;



export const FancyButton = styled.button`

  color: #313133;
  background: #dcdcdc;
  background: linear-gradient(90deg, #dcdcdc 0%, #dcdcdc 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px #dcdcdc;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  &:hover {
    color: #313133;
    transform: translateY(-6px);
  }

  &:before {
    content: "";
    border-radius: 1000px;
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid #dcdcdc;
    box-shadow: 0 0 60px #dcdcdc;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
    &:hover {
      opacity: 1;
    }
  }

  &:after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #dcdcdc;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${ring} 1.5s infinite;
    &:hover {
      animation: none;
      display: none;
    }
  }
`;