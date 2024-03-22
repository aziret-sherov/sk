import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContent = styled.div`
  list-style: none;
  width: 100%;
  background: #f2f6ff;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.div`
  padding: 10px;
  display: flex;
  justify-content: end;
`;

export const Content = styled.div`
  display: grid;
`;

export const CloseIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 20px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;