import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import backgroundImage from "../../assets/FooterBackground.png";
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import styled from "styled-components";
import logoImage from '../../assets/FooterLogo.png';

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
    color: white;
`;

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <CustomContainer
            height={''}
        >
            <Grid container>
                <Grid item xs={12}>
                    <Title lineHeight={isMobile ?  '45px' : '80px'} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                        График работы
                    </Title>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={ isMobile ? 12 : 8} mt={isMobile ? 5 : 0}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Title fontFamily={"DIN Condensed"} fontSize={'36px'}>
                                        Отдел продаж
                                    </Title>
                                </Grid>
                                <Grid item xs={isMobile ? 12 :6}>
                                    <Title  fontFamily={"DIN Condensed"} fontSize={'20px'}>
                                        Понедельник - Пятница
                                    </Title>
                                    <Title  fontFamily={"DIN Condensed"} fontSize={'20px'} color={'green'}>
                                        9:00 - 19:00
                                    </Title>
                                </Grid>
                                <Grid item xs={isMobile ? 12 :6}>
                                    <Title  fontFamily={"DIN Condensed"} fontSize={'20px'}>
                                        Понедельник - Пятница
                                    </Title>
                                    <Title  fontFamily={"DIN Condensed"} fontSize={'20px'} color={'green'}>
                                        9:00 - 19:00
                                    </Title>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={ isMobile ? 12 : 4} mt={isMobile ? 5 : 0}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Title lineHeight={'45px'} fontFamily={"DIN Condensed"} fontSize={'56px'}>
                                        Касса
                                    </Title>
                                </Grid>
                                <Grid item xs={6}>
                                    <Title  fontFamily={"DIN Condensed"} fontSize={'20px'}>
                                        Понедельник - Пятница
                                    </Title>
                                    <Title  fontFamily={"DIN Condensed"} fontSize={'20px'} color={'green'}>
                                        9:00 - 19:00
                                    </Title>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} mt={isMobile ? 10 : 0}>
                    <Box component="img" sx={{ flexGrow: 1 }} src={logoImage} alt="Logo" style={{maxHeight: '50px'}}/>
                </Grid>
                <Grid item xs={12}>
                    <CustomContainer
                        height='175px'
                        backgroundImage={`url(${backgroundImage})`}
                    />
                </Grid>
            </Grid>
        </CustomContainer>
    );
};

export default Footer;