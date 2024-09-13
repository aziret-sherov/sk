import Navigation from "../Navigation/Navigation.tsx";
import {
    Box,
    Button, Card,
    CardActionArea,
    CardContent,
    CardMedia, Checkbox,
    Grid,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import styled from "styled-components";
import backgroundImage from "../../assets/testImg.png";
import Image1 from "../../assets/img1.svg";
import Image2 from "../../assets/img2.svg";
import Image3 from "../../assets/img3.svg";
import Image4 from "../../assets/img4.svg";
import Image5 from "../../assets/img5.svg";
import Image6 from "../../assets/img6.svg";
import Contacts from "../Contacts/Contacts.tsx";
import Footer from "../Footer/Footer.tsx";
import ContactForm from "../ContactForm.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";
import Carusel from "./Carusel.tsx";

const details = [
    {
        icon: Image1,
        title: 'Первая линия',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image2,
        title: 'Качественная отделка',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image3,
        title: 'Индивидуальные газовые котлы',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image4,
        title: 'Благоустройство',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image5,
        title: 'Возможность перепланировки',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image6,
        title: 'Подземный паркинг',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    }
];


const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    color: #008E39;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid #008E39;
    width: 300px;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
`;

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

const ObjectDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const params = useParams();
    console.log('test', params)
    const [objects, setObjects] = useState<string[]>([])


    const fetchData = async () => {
        if (params?.id){
            try {
                const response = await axiosInstance.get(ApiPaths.completed_projects_details(params?.id));
                setObjects(response.data.results)
            } catch (error) {
                console.error('Error fetching data', error);
                throw error;
            }
        }else {
            return
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <Navigation/>
            <CustomContainer
                backgroundImage={`url(${backgroundImage})`}
            >
                <Box>
                    <Title lineHeight={isMobile ? '45px' : '80px'} width={isMobile ? '256px' : '827px'}
                           fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>Жилой комплекс №1</Title>
                    <Description mt={isMobile ? 5 : 10} lineHeight={isMobile ? '20px' : ''}
                                 fontSize={isMobile ? '12' : ''}>
                        Адрес
                    </Description>
                </Box>
                {
                    isMobile &&
                    <Box display='flex' justifyContent='center' alignContent='end' position='absolute' bottom={10}
                         left={'47%'}>
                        <KeyboardArrowDownIcon fontSize={'large'} sx={{color: 'white'}}/>
                    </Box>}
            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Title lineHeight={isMobile ? '45px' : '80px'} color={"black"} fontFamily={"DIN Condensed"}
                       fontSize={isMobile ? '56px' : '108px'}>
                    О проекте
                </Title>

                <Grid container spacing={3} justifyContent="center" mb={4} mt={4}>
                    {details.map((detail, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <DetailItem
                                icon={detail.icon}
                                title={detail.title}
                                description={detail.description}
                            />
                        </Grid>
                    ))}
                </Grid>

            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                       fontSize={isMobile ? '56px' : '108px'}>
                    Галлерея
                </Title>
                <Grid container mt={5} mb={5}>
                    <Grid item xs={12}>
                        <Carusel objects={objects}/>
                    </Grid>
                    <Grid item xs={12} mt={5} justifyContent={'center'} display={"flex"}>
                        <StyledButton>
                            оставить заявку
                        </StyledButton>
                    </Grid>
                </Grid>
            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>

                <Grid container>
                    <Grid item xs={12} mb={4}>
                        <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                               fontSize={isMobile ? '56px' : '108px'}>
                            ход работы
                        </Title>
                    </Grid>
                    <Grid item xs={12} mt={isMobile ? 5 : 0} mb={4}>
                        <Box height={600} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}/>
                    </Grid>
                </Grid>
            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Grid container>
                    <Grid item xs={isMobile ? 12 : 2} mt={isMobile ? 5 : 0} mb={4}>
                        <Title
                            color='black'
                            fontFamily={"DIN Condensed"}
                            fontSize={isMobile ? '26px' : '30px'}
                        >
                            Кол-во комнат:
                        </Title>
                        <Box>
                            <Box display='flex' gap='10px' alignItems='center'>
                                <Checkbox/>
                                <Title
                                    color='black'
                                    fontFamily={"DIN Condensed"}
                                    fontSize={isMobile ? '14px' : '18px'}
                                >
                                    Title
                                </Title>
                            </Box>
                        </Box>
                        <Box>
                            <Box display='flex' gap='10px' alignItems='center'>
                                <Checkbox/>
                                <Title
                                    color='black'
                                    fontFamily={"DIN Condensed"}
                                    fontSize={isMobile ? '14px' : '18px'}
                                >
                                    Title
                                </Title>
                            </Box>
                        </Box>
                        <Box>
                            <Box display='flex' gap='10px' alignItems='center'>
                                <Checkbox/>
                                <Title
                                    color='black'
                                    fontFamily={"DIN Condensed"}
                                    fontSize={isMobile ? '14px' : '18px'}
                                >
                                    Title
                                </Title>
                            </Box>
                        </Box>
                        <Box>
                            <Box display='flex' gap='10px' alignItems='center'>
                                <Checkbox/>
                                <Title
                                    color='black'
                                    fontFamily={"DIN Condensed"}
                                    fontSize={isMobile ? '14px' : '18px'}
                                >
                                    Title
                                </Title>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={isMobile ? 12 : 10} mt={isMobile ? 5 : 0} mb={4}>
                        <Grid container>
                            <Grid item xs={isMobile ? 12 : 4}>
                                <Card style={{marginRight: 20, boxShadow: 'none'}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height={isMobile ? '500px' : "400"}
                                            image={backgroundImage || ''}
                                        />
                                        <CardContent
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    item.title
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    item.description
                                                </Typography>
                                                <Typography variant="h6" color="text.primary">
                                                    ул. Ленина 15
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Button variant={'contained'} color={"success"}>подробнее</Button>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={isMobile ? 12 : 4}>
                                <Card style={{marginRight: 20, boxShadow: 'none'}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height={isMobile ? '500px' : "400"}
                                            image={backgroundImage || ''}
                                        />
                                        <CardContent
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    item.title
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    item.description
                                                </Typography>
                                                <Typography variant="h6" color="text.primary">
                                                    ул. Ленина 15
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Button variant={'contained'} color={"success"}>подробнее</Button>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={isMobile ? 12 : 4}>
                                <Card style={{marginRight: 20, boxShadow: 'none'}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height={isMobile ? '500px' : "400"}
                                            image={backgroundImage || ''}
                                        />
                                        <CardContent
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    item.title
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    item.description
                                                </Typography>
                                                <Typography variant="h6" color="text.primary">
                                                    ул. Ленина 15
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Button variant={'contained'} color={"success"}>подробнее</Button>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item xs={isMobile ? 12 : 4}>
                                <Card style={{marginRight: 20, boxShadow: 'none'}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height={isMobile ? '500px' : "400"}
                                            image={backgroundImage || ''}
                                        />
                                        <CardContent
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    item.title
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    item.description
                                                </Typography>
                                                <Typography variant="h6" color="text.primary">
                                                    ул. Ленина 15
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Button variant={'contained'} color={"success"}>подробнее</Button>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
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
                            расположение
                        </Title>
                    </Grid>
                    <Grid item xs={12} mt={isMobile ? 5 : 0} mb={4}>
                        <Box height={600} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}/>
                    </Grid>
                </Grid>
            </CustomContainer>

            <ContactForm/>
            <Contacts/>
            <Footer/>
        </>
    );
};

export default ObjectDetails;
