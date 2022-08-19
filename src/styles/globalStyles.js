import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

body {
  color: black;
  font-family: 'Familjen Grotesk', sans-serif;
  transition: all 0.50s linear;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1400px;
  }
`;

export const Box = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;

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