import styled from "styled-components";
import {Container} from "@mui/material";
import {ReactNode} from "react";

const StyledContainer = styled(Container)<{ background?: string, height?: string }>`
    padding-top: 60px;
    display: flex;
    justify-content: center;
    align-content: center;
    background: ${({background}) => background || '#161616'};
    height: ${({height}) => height};
    padding-left: 50px;
`;

interface props {
    background?: string
    height?: string
    children?: ReactNode
}

const CustomContainer = ({background, height = '100vh', children}: props) => {
    return <StyledContainer maxWidth={false} background={background} height={height}>{children}</StyledContainer>;
};

export default CustomContainer;