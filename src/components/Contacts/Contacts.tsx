import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import {Box, Button, Grid, Typography} from "@mui/material";
import megaImage from '../../assets/MEGA-logo.png';
import oImage from '../../assets/Лого_О!_НУР_Телеком.png';
import beelineImage from '../../assets/Beeline_logo_2021.png';
import pinImage from '../../assets/pin.svg';
import styled from "styled-components";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
`;

const Contacts = () => {

    return (
        <CustomContainer background={'#FFFFFF'} height=''>
            <Grid container>
                <Grid item xs={4}>
                    <Grid container gap={1}>
                        <Grid item xs={12}>
                            <Title lineHeight={ '45px'} fontFamily={"DIN Condensed"} fontSize={ '56px'}>
                                Контакты
                            </Title>
                        </Grid>
                        <Grid display={'flex'} item xs={12}>
                            <Box height={25} component={'img'} src={megaImage}/>
                            <Typography ml={2}>0223 130 130</Typography>
                        </Grid>
                        <Grid display={'flex'} item xs={12}>
                            <Box height={25} component={'img'} src={oImage}/>
                            <Typography ml={2}>0223 130 130</Typography>
                        </Grid>
                        <Grid display={'flex'} item xs={12}>
                            <Box height={25} component={'img'} src={beelineImage}/>
                            <Typography ml={2}>0223 130 130</Typography>
                        </Grid>
                        <Grid display={'flex'} item xs={12}>
                            <Box height={25} component={'img'} src={pinImage}/>
                            <Typography ml={2}>Головной офис:
                                ул. Токмокская 75</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Box height={600} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}>

                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12} mt={4} justifyContent={"center"} display={"flex"}>
                <Box
                    width={"30%"}
                    ml={2}
                    display={"flex"}
                    alignItems={'end'}
                    mb={5}
                >
                    <Button variant={"contained"} color={"success"} fullWidth>
                        получить консультацию
                    </Button>
                </Box>
            </Grid>
        </CustomContainer>
    );
};

export default Contacts;