import Navigation from "../../components/Navigation/Navigation.tsx";
import ContactForm from "../../components/ContactForm.tsx";
import Contacts from "../../components/Contacts/Contacts.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import CustomContainer from "../../components/CustomContainer/CustomContainer.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import ComplitedObjects from "../../components/ComplitedObjects/ComplitedObjects.tsx";
import News from "../../components/News/News.tsx";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";

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
    const [objects, setObjects] = useState([
        {
            id: 0,
            quick_answers: [
                {
                    id: 0,
                    question: "",
                    answer: "",
                    about_company: 0
                }
            ],
            title: "",
            image: ""
        }
    ])

    const [objects2, setObjects2] = useState(
        [
            {
                id: 0,
                title: "",
                description: "",
                address: "",
                completed_projects_images: [{
                    id: 0,
                    image: ""
                },]
            }
        ])

    const [license, setLicense] = useState([
        {
            id: 0,
            title: "",
            icon: ""
        }
    ])

    const [awards, setAwards] = useState([
        {
            id: 0,
            title: "",
            icon: ""
        }
    ])


    const fetchDataBuilds = async () => {
        try {
            const response = await axiosInstance.get(ApiPaths.completed_projects);
            setObjects2(response.data)
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }
    const fetchData = async () => {
            try {
                const response = await axiosInstance.get(ApiPaths.about);
                setObjects(response.data.results)
            } catch (error) {
                console.error('Error fetching data', error);
                throw error;
            }
        }

        const fetchDataLicense = async () => {
            try {
                const response = await axiosInstance.get(ApiPaths.license);
                setLicense(response.data.results)
            } catch (error) {
                console.error('Error fetching data', error);
                throw error;
            }
        }
        const fetchDataAwards = async () => {
            try {
                const response = await axiosInstance.get(ApiPaths.awards);
                setAwards(response.data.results)
            } catch (error) {
                console.error('Error fetching data', error);
                throw error;
            }
        }

    useEffect(() => {
        fetchData()
        fetchDataBuilds()
        fetchDataLicense()
        fetchDataAwards()
    }, []);

    return (
        <>
            <Navigation/>

            {objects[0] &&
                <CustomContainer background={'#FFFFFF'} height=''>
                <Grid container>
                    <Grid item xs={12} mb={4}>
                        <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                               fontSize={isMobile ? '56px' : '108px'}>
                            {objects[0].title}
                        </Title>
                    </Grid>
                    <Grid item xs={12} mt={isMobile ? 5 : 0} mb={4}>
                        <Grid container>
                            <Grid item xs={5} p={2}>
                                {
                                    objects[0].quick_answers.map((ques) => (<Box mb={2} key={ques.id}>
                                        <Typography fontSize='20px' fontWeight={800}>
                                            {ques.question}
                                        </Typography>
                                        <Typography fontSize='20px' fontWeight={400}>
                                            {ques.answer}
                                        </Typography>
                                    </Box>))
                                }
                            </Grid>
                            <Grid item xs={7}>
                                {
                                    objects[0]?.image
                                        ? <Box display='flex' justifyContent='center'>
                                            <Box component='img' height={845}
                                                 sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}
                                                 src={objects[0]?.image}/>
                                        </Box>
                                        : <Box height={600} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}/>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CustomContainer>}

            {objects2.length > 0 && <CustomContainer background={'#FFFFFF'} height=''>
                <Grid container>
                    {objects2.length > 0 && <Grid item xs={12} mb={4}>
                        <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                               fontSize={isMobile ? '56px' : '108px'}>
                            мы построили
                        </Title>
                    </Grid>}

                    <Grid item xs={12}>
                        <Grid container spacing={3} justifyContent="center" mb={4} mt={4}>
                            {objects2.length > 0 &&
                                objects2.map((detail, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <DetailItem
                                            icon={detail.completed_projects_images[0]?.image || ''}
                                            title={detail.title}
                                            description={detail.description}
                                        />
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </CustomContainer>}
            <ComplitedObjects/>
            {objects[1] &&
                <CustomContainer background={'#FFFFFF'} height=''>
                    <Grid container>
                        <Grid item xs={12} mb={4}>
                            <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                                   fontSize={isMobile ? '56px' : '108px'}>
                                {objects[1].title}
                            </Title>
                        </Grid>
                        <Grid item xs={12} mt={isMobile ? 5 : 0} mb={4}>
                            <Grid container>
                                <Grid item xs={5} p={2}>
                                    {
                                        objects[1].quick_answers.map((ques) => (<Box mb={2} key={ques.id}>
                                            <Typography fontSize='20px' fontWeight={800}>
                                                {ques.question}
                                            </Typography>
                                            <Typography fontSize='20px' fontWeight={400}>
                                                {ques.answer}
                                            </Typography>
                                        </Box>))
                                    }
                                </Grid>
                                <Grid item xs={7}>
                                    {
                                        objects[1]?.image
                                            ? <Box display='flex' justifyContent='center'>
                                                <Box component='img' height={845}
                                                     sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}
                                                     src={objects[1]?.image}/>
                                            </Box>
                                            : <Box height={600} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}/>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CustomContainer>}

            <CustomContainer background={'#FFFFFF'} height=''>
                <Typography variant="h4" gutterBottom>
                    ЛИЦЕНЗИИ
                </Typography>

                <Grid container spacing={2}>
                    {license.map((text) => (
                        <Grid item xs={12} md={4} key={text.id}>
                            {
                                text.icon
                                ?<Box
                                        sx={{
                                            padding: '20px',
                                        }}
                                    >
                                        <Box
                                            component='img'
                                            sx={{
                                                height: isMobile ? '300px': '519px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'flex-end',
                                                padding: '20px',
                                            }}
                                            src={text.icon}
                                        />
                                        <Typography variant="body2" textAlign='center'>{text.title}</Typography>
                                    </Box>
                                    :
                                    <Box
                                        sx={{
                                            backgroundColor: 'black',
                                            color: 'white',
                                            height: isMobile ? '300px': '519px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'flex-end',
                                            padding: '20px',
                                        }}
                                    >
                                        <Typography variant="body2">{text.title}</Typography>
                                    </Box>
                            }
                        </Grid>
                    ))}
                </Grid>
            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Typography variant="h4" gutterBottom>
                    НАГРАДЫ
                </Typography>

                <Grid container spacing={2}>
                    {awards.map((text) => (
                        <Grid item xs={12} md={4} key={text.id}>
                            {
                                text.icon
                                    ?<Box
                                        sx={{
                                            padding: '20px',
                                        }}
                                    >
                                        <Box
                                            component='img'
                                            sx={{
                                                height: isMobile ? '300px': '519px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'flex-end',
                                                padding: '20px',
                                            }}
                                            src={text.icon}
                                        />
                                        <Typography variant="body2" textAlign='center'>{text.title}</Typography>
                                    </Box>
                                    :
                                    <Box
                                        sx={{
                                            backgroundColor: 'black',
                                            color: 'white',
                                            height: isMobile ? '300px': '519px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'flex-end',
                                            padding: '20px',
                                        }}
                                    >
                                        <Typography variant="body2">{text.title}</Typography>
                                    </Box>
                            }
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