import styled from "styled-components";
import { BsXLg } from "react-icons/bs";

const BigCard = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 2px 2px 2px grey;
  border-radius: 15px;
  height: 50vh;
  width: 100%;
  max-width: 1000px;
  transform: translate(-50%, -50%) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  @media screen and (min-width: 768px) {
    width: 35rem;
    height: 25rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(128, 128, 128, 0.9);
`;

export const LargeCloseIcon = styled(BsXLg)`
  transform: scale(1.5);
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
  z-index: 2;
`;

export default function Modal({ action, children }) {
  return (
    <Overlay>
      <BigCard>
        <LargeCloseIcon onClick={action} />
        {children}
      </BigCard>
    </Overlay>
  );
}
