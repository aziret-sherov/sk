import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import styled from "styled-components";
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import CustomCarusel from "./CustomCarusel.tsx";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px; 
    text-align: left;
`;
const Objects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <CustomContainer background={'#FFFFFF'} height=''>
            <Title lineHeight={isMobile ?  '45px' : '80px'} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                Cтроящиеся объекты
            </Title>
            <CustomCarusel/>
            <CustomCarusel/>
            <CustomCarusel/>
        </CustomContainer>
    );
};

export default Objects;