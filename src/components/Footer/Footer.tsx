import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import backgroundImage from "../../assets/FooterBackground.png";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "styled-components";
import logoImage from '../../assets/FooterLogo.png';
import axiosInstance from "../../axios.ts";
import { ApiPaths } from "../../apiPath.ts";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

interface Schedule {
    id: number;
    title: string;
    weekdays_title: string;
    weekdays_hours: string;
    weekends_title: string;
    weekends_hours: string;
}

interface ISocials {
    id: number;
    platform: string;
    link: string;
    icon: string;
}

const Title = styled(Typography)`
  font-size: 108px;
  font-weight: 600;
  line-height: 54px;
  text-align: left;
  color: white;
  cursor: pointer;
`;

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navigate = useNavigate();

    const [schedules, setSchedules] = useState<Schedule[] | null>(null);
    const [socials, setSocials] = useState<ISocials[] | null>(null);

    const fetchSchedules = async () => {
        try {
            const response = await axiosInstance.get<{ results: Schedule[] }>(ApiPaths.schedule);
            setSchedules(response.data.results);
        } catch (error) {
            console.error('Error fetching schedules', error);
        }
    };

    const fetchSocials = async () => {
        try {
            const response = await axiosInstance.get<{ results: ISocials[] }>(ApiPaths.social_media);
            setSocials(response.data.results);
        } catch (error) {
            console.error('Error fetching schedules', error);
        }
    };

    useEffect(() => {
        fetchSchedules();
        fetchSocials();
    }, []);

    return (
        <CustomContainer height={''}>
            <Grid container>
                <Grid item xs={12}>
                    <Title
                        lineHeight={isMobile ? '45px' : '80px'}
                        fontFamily={"DIN Condensed"}
                        fontSize={isMobile ? '56px' : '108px'}
                    >
                        График работы
                    </Title>
                </Grid>

                <Grid item xs={12} pt={isMobile ? '' : 10} pl={isMobile ? '' : 10}>
                    <Grid container>
                        <Grid item xs={isMobile ? 12 : 8} mt={isMobile ? 5 : 0}>
                            <Grid container p={isMobile ? '' : '10'}>
                                <Grid item xs={12}>
                                    <Title fontFamily={"DIN Condensed"} fontSize={'36px'}>
                                        Отдел продаж
                                    </Title>
                                </Grid>

                                {schedules?.map((schedule) => (
                                    <Grid container key={schedule.id} spacing={2}>
                                        <Grid item xs={isMobile ? 12 : 6}>
                                            <Title fontFamily={"DIN Condensed"} fontSize={'20px'}>
                                                {schedule.weekdays_title}
                                            </Title>
                                            <Title fontFamily={"DIN Condensed"} fontSize={'20px'} color={'green'}>
                                                {schedule.weekdays_hours}
                                            </Title>
                                        </Grid>
                                        <Grid item xs={isMobile ? 12 : 6}>
                                            <Title fontFamily={"DIN Condensed"} fontSize={'20px'}>
                                                {schedule.weekends_title}
                                            </Title>
                                            <Title fontFamily={"DIN Condensed"} fontSize={'20px'} color={'green'}>
                                                {schedule.weekends_hours}
                                            </Title>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid item xs={isMobile ? 12 : 4} mt={isMobile ? 5 : 0}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Title lineHeight={'45px'} fontFamily={"DIN Condensed"} fontSize={'56px'}>
                                        <br/>
                                    </Title>
                                </Grid>

                                {schedules && schedules.length > 0 && (
                                    <Grid item xs={6}>
                                        <Box width="50%">
                                            <Title fontFamily={"DIN Condensed"} fontSize={'20px'} onClick={()=>{
                                                navigate('/');
                                            }}>
                                                ОБЪЕКТЫ
                                            </Title>
                                            <Title fontFamily={"DIN Condensed"} fontSize={'20px'} onClick={()=>{
                                                navigate('/');
                                            }}>
                                                КОНТАКТЫ
                                            </Title>
                                            <Title fontFamily={"DIN Condensed"} fontSize={'20px'} onClick={()=>{
                                                navigate('/about');
                                            }}>
                                                О КОМПАНИИ
                                            </Title>
                                        </Box>
                                    </Grid>
                                )}
                                {socials && socials.length > 0 && (
                                    <Grid item xs={6}>
                                        <Box width="50%">
                                            {
                                                socials.map(social=>(
                                                    <Box component='img' width="36px" sx={{
                                                        cursor: 'pointer'
                                                    }} src={social.icon} onClick={()=>{
                                                        window.open(social.link, '_blank')
                                                    }}/>
                                                ))
                                            }
                                        </Box>
                                    </Grid>
                                )
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    xs={12}
                    mt={isMobile ? 10 : 0}
                    p={isMobile ? '' : '10'}
                    pl={isMobile ? '' : 10}
                    pt={isMobile ? '' : 10}
                    display="flex"
                    justifyContent="space-between"
                >
                    <Box width="50%">
                        <Box
                            component="img"
                            sx={{ flexGrow: 1 }}
                            src={logoImage}
                            alt="Logo"
                            style={{ maxHeight: '50px', width: isMobile ? '90%' : '' }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <CustomContainer height="175px" backgroundImage={`url(${backgroundImage})`} />
                </Grid>
            </Grid>
        </CustomContainer>
    );
};

export default Footer;
