import styled from "styled-components";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomContainer from "../CustomContainer/CustomContainer.tsx";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px; 
    text-align: left;
    color: #FFFFFF;
`;

const Description = styled(Typography)`
    font-size: 26px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: #FFFFFF;
    text-transform: uppercase;
`;
const MainContainer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <CustomContainer>
            <Box>
                <Title lineHeight={isMobile ?  '45px' : '80px'} width={isMobile ? '256px' : '627px'} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>Анимация логотипа</Title>
                <Description mt={isMobile ? 5 : 10} lineHeight={isMobile ?  '20px' : ''} fontSize={isMobile ? '12' : ''}>
                    Строительная компания СК Салам
                </Description>
            </Box>
            <Box display='flex' justifyContent='center' alignContent='end' position='absolute' bottom={10} left={'47%'}>
                <KeyboardArrowDownIcon fontSize={'large'} sx={{ color: 'white' }}/>
            </Box>
        </CustomContainer>
    );
};

export default MainContainer;