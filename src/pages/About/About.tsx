import Navigation from "../../components/Navigation/Navigation.tsx";
import ContactForm from "../../components/ContactForm.tsx";
import Contacts from "../../components/Contacts/Contacts.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import CustomContainer from "../../components/CustomContainer/CustomContainer.tsx";
import styled from "styled-components";
import {useState} from "react";
import ComplitedObjects from "../../components/ComplitedObjects/ComplitedObjects.tsx";
import News from "../../components/News/News.tsx";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
    color: #FFFFFF;
`;

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [objects, setObjects] = useState(
        {
            id: 1,
            completed_projects_images: [{
                image: ''
            }],
            about_completed_projects: [
                {
                    id: 0,
                    title: "",
                    desc: "",
                    icon: "",
                    completed_projects: 0
                }
            ],
            flat_completed_projects: [],
            title: "",
            description: "",
            address: "",
            lat: 0,
            long: 0
        }
    )
    console.log('test', setObjects)

    return (
        <>
            <Navigation/>

            <CustomContainer background={'#FFFFFF'} height=''>
                <Grid container>
                    <Grid item xs={12} mb={4}>
                        <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                               fontSize={isMobile ? '56px' : '108px'}>
                            О компании
                        </Title>
                    </Grid>
                    <Grid item xs={12} mt={isMobile ? 5 : 0} mb={4}>
                        <Grid container>
                            <Grid item xs={6} p={2}>
                                <Box mb={2}>
                                    <Typography fontSize='20px' fontWeight={800}>
                                        Кто мы
                                    </Typography>
                                    <Typography fontSize='20px' fontWeight={400}>
                                        Добрый день, друзья! Сегодня генеральный директор компании «Peri» в Центральной Азии, Игорь Тяпкин.
                                    </Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography fontSize='20px' fontWeight={800}>
                                        Кто мы
                                    </Typography>
                                    <Typography fontSize='20px' fontWeight={400}>
                                        Добрый день, друзья! Сегодня генеральный директор компании «Peri» в Центральной Азии, Игорь Тяпкин.
                                    </Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography fontSize='20px' fontWeight={800}>
                                        Кто мы
                                    </Typography>
                                    <Typography fontSize='20px' fontWeight={400}>
                                        Добрый день, друзья! Сегодня генеральный директор компании «Peri» в Центральной Азии, Игорь Тяпкин.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box height={600} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomContainer>

            <CustomContainer background={'#FFFFFF'} height=''>
                <Grid container>
                    <Grid item xs={12} mb={4}>
                        <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                               fontSize={isMobile ? '56px' : '108px'}>
                            мы построили
                        </Title>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={3} justifyContent="center" mb={4} mt={4}>
                            {objects.about_completed_projects.length > 0 &&
                                objects.about_completed_projects.map((detail, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <DetailItem
                                            icon={detail.icon}
                                            title={detail.title}
                                            description={detail.desc}
                                        />
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </CustomContainer>
            <ComplitedObjects/>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Grid container>
                    <Grid item xs={12} mb={4}>
                        <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                               fontSize={isMobile ? '56px' : '108px'}>
                            О компании
                        </Title>
                    </Grid>
                    <Grid item xs={12} mt={isMobile ? 5 : 0} mb={4}>
                        <Grid container>
                            <Grid item xs={6} p={2}>
                                <Box mb={2}>
                                    <Typography fontSize='20px' fontWeight={800}>
                                        Кто мы
                                    </Typography>
                                    <Typography fontSize='20px' fontWeight={400}>
                                        Добрый день, друзья! Сегодня генеральный директор компании «Peri» в Центральной Азии, Игорь Тяпкин.
                                    </Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography fontSize='20px' fontWeight={800}>
                                        Кто мы
                                    </Typography>
                                    <Typography fontSize='20px' fontWeight={400}>
                                        Добрый день, друзья! Сегодня генеральный директор компании «Peri» в Центральной Азии, Игорь Тяпкин.
                                    </Typography>
                                </Box>
                                <Box mb={2}>
                                    <Typography fontSize='20px' fontWeight={800}>
                                        Кто мы
                                    </Typography>
                                    <Typography fontSize='20px' fontWeight={400}>
                                        Добрый день, друзья! Сегодня генеральный директор компании «Peri» в Центральной Азии, Игорь Тяпкин.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box height={600} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomContainer>

            <CustomContainer background={'#FFFFFF'} height=''>
                <Grid container>
                    <Grid item xs={12} mb={4}>
                        <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                               fontSize={isMobile ? '56px' : '108px'}>
                            С кем работаем
                        </Title>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={3} justifyContent="center" mb={4} mt={4}>
                            {objects.about_completed_projects.length > 0 &&
                                objects.about_completed_projects.map((detail, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <DetailItem
                                            icon={detail.icon}
                                            title={detail.title}
                                            description={detail.desc}
                                        />
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Typography variant="h4" gutterBottom>
                    ЛИЦЕНЗИИ
                </Typography>

                <Grid container spacing={2}>
                    {['Звание лауреата международной награды "Золотой Ягуар" 2008г.',
                        'Звание лауреата международной награды "Золотой Ягуар" 2008г.',
                        'Звание лауреата международной награды "Золотой Ягуар" 2008г.'].map((text, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    height: isMobile ? '300px': '500px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    padding: '20px',
                                }}
                            >
                                <Typography variant="body2">{text}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Typography variant="h4" gutterBottom>
                    награды
                </Typography>

                <Grid container spacing={2} mb={5}>
                    {['Звание лауреата международной награды "Золотой Ягуар" 2008г.',
                        'Звание лауреата международной награды "Золотой Ягуар" 2008г.',
                        'Звание лауреата международной награды "Золотой Ягуар" 2008г.'].map((text, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Box
                                sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    height: isMobile ? '300px': '500px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    padding: '20px',
                                }}
                            >
                                <Typography variant="body2">{text}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </CustomContainer>
            <ContactForm/>
            <News/>
            <Contacts/>
            <Footer/>
        </>
    );
};

export default About;

const DetailItem = ({icon, title, description}: { icon: string; title: string; description: string }) => (
    <Box sx={{textAlign: 'center', padding: 4, border: 'none', borderRadius: 2, backgroundColor: '#F7F7F7'}}>
        <img src={icon} alt={title} style={{
            marginBottom: 10,
            width: "213px",
            height: '180px',
        }}/>
        <Typography variant="h6" component="h3" sx={{marginBottom: 1}}>
            {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
            {description}
        </Typography>
    </Box>
);