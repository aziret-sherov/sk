import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import backgroundImage from "../../assets/FooterBackground.png";
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import styled from "styled-components";

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
        >
            <Grid container>
                <Grid item xs={12}>
                    <Title lineHeight={isMobile ?  '45px' : '80px'} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                        График работы
                    </Title>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Title lineHeight={'45px'} fontFamily={"DIN Condensed"} fontSize={'56px'}>
                                Отдел продаж
                            </Title>
                        </Grid>
                        <Grid item xs={4}>
                            <Title lineHeight={'45px'} fontFamily={"DIN Condensed"} fontSize={'56px'}>
                                Касса
                            </Title>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <CustomContainer
                        height=''
                        backgroundImage={`url(${backgroundImage})`}
                    />
                </Grid>
            </Grid>
        </CustomContainer>
    );
};

export default Footer;