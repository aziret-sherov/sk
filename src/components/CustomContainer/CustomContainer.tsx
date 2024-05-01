import styled from "styled-components";
import {Container} from "@mui/material";
import {ReactNode} from "react";

const StyledContainer = styled(Container)<{ background?: string, height?: string, backgroundImage?: string }>`
    padding-top: 60px;
    display: flex;
    justify-content: center;
    align-content: center;
    background: ${({background}) => background || '#161616'};
    background-image: ${({backgroundImage}) => backgroundImage || ''};
    height: ${({height}) => height};
    padding-left: 50px;

    ${({backgroundImage}) => !!backgroundImage && `
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
    `};
}
`;

interface props {
    background?: string
    height?: string
    children?: ReactNode
    backgroundImage?: string
}

const CustomContainer = ({background, height = '100vh', children, backgroundImage}: props) => {
    return <StyledContainer maxWidth={false} background={background} height={height}
                            backgroundImage={backgroundImage}>{children}</StyledContainer>;
};

export default CustomContainer;