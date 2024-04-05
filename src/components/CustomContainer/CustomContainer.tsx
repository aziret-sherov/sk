import styled from "styled-components";
import {Container} from "@mui/material";
import {ReactNode} from "react";

const StyledContainer = styled(Container)<{ background?: string }>`
    padding-top: 60px;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    background: ${(props) => props?.background || '#161616'};
    padding-left: 50px;
`;

interface props {
    background?: string
    children?: ReactNode
}

const CustomContainer = ({background, children}: props) => {
    return <StyledContainer background={background}>{children}</StyledContainer>;
};

export default CustomContainer;