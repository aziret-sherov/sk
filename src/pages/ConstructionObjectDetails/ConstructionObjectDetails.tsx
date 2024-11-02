// @ts-nocheck
import Navigation from "../../components/Navigation/Navigation.tsx";
import {
    Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox,
    Grid, IconButton, Modal,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomContainer from "../../components/CustomContainer/CustomContainer.tsx";
import styled from "styled-components";
import backgroundImage from "../../assets/testImg.png";
import Contacts from "../../components/Contacts/Contacts.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";
import Carusel from "../ObjectDetails/Carusel.tsx";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import logoImage from "../../assets/customPin.png";
import L from 'leaflet';
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "../../components/ContactForm.tsx";


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

const ConstructionObjectDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const params = useParams();
    const [objects, setObjects] = useState({
        id: 0,
        construction_projects_images: [     {id: 0,image: ""},],
        about_construction_projects: [{
            icon: '',
            title: '',
            desc: '',

        }],
        flat_construction_projects: [
            {
                id: 0,
                category: {
                    title: ""
                },
                image: "",
                completed_projects: 0
            },
        ],
        title: "",
        description: "",
        address: "",
        work_process: "",
        lat: 0,
        long: 0
    })


    const fetchData = async () => {
        if (params?.id){
            try {
                const response = await axiosInstance.get(ApiPaths.construction_projects_details(params?.id));
                setObjects(response.data)
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

    console.log('test', objects)

    const mapCenter = useMemo(() => ({
        lat: objects.lat || 42.8756483,
        lng: objects.long || 74.5845829
    }), [objects]);

    const icon = L.icon({
        iconUrl: logoImage,
        iconSize: [25, 32],
    });

    return (
        <>
            <Navigation/>
            <CustomContainer
                backgroundImage={`url(${objects.construction_projects_images[0].image || backgroundImage})`}
            >
                <Box>
                    <Title lineHeight={isMobile ? '45px' : '80px'} width={isMobile ? '256px' : '827px'}
                           fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                        {
                            objects.title
                        }
                    </Title>
                    <Description mt={isMobile ? 5 : 10} lineHeight={isMobile ? '20px' : ''}
                                 fontSize={isMobile ? '12' : ''}>
                        {objects.address}
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
                    {objects.about_construction_projects.length > 0 &&
                        objects.about_construction_projects.map((detail, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <DetailItem
                                    icon={detail.icon}
                                    title={detail.title}
                                    description={detail.desc}
                                />
                            </Grid>
                        ))}
                </Grid>

            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                       fontSize={isMobile ? '56px' : '108px'}>
                    Галерея
                </Title>
                <Grid container mt={5} mb={5}>
                        <Carusel objects={objects?.construction_projects_images}/>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center">
                    <Button
                        variant={'contained'}
                        color={"success"}
                    >ОСТАВИТЬ ЗАЯВКУ</Button>
                </Grid>
            </CustomContainer>

            <CustomContainer background={'#FFFFFF'} height=''>
                <Title lineHeight={isMobile ? '45px' : '80px'} color={"black"} fontFamily={"DIN Condensed"}
                       fontSize={isMobile ? '56px' : '108px'}>
                    Подобрать квартиру
                </Title>
                <Grid container>
                    {/*<Grid item xs={3} p={2}>*/}
                    {/*    <Title color={"black"} fontWeight={500} fontSize={isMobile ? '56px' : '20px'}>*/}
                    {/*        Кол-во комнат:*/}
                    {/*    </Title>*/}
                    {/*    {objects.flat_construction_projects.length > 0 &&*/}
                    {/*        objects.flat_construction_projects.map((flat, index) => (*/}
                    {/*            <Grid container alignItems="center" key={index}>*/}
                    {/*                <Checkbox color="success" />*/}
                    {/*                <Typography>*/}
                    {/*                    {flat.category.title}-к. кв*/}
                    {/*                </Typography>*/}
                    {/*            </Grid>*/}
                    {/*        ))*/}
                    {/*    }*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} mb={3} mt={4}>
                        <Grid container spacing={'5px'} justifyContent="start">
                            {objects.flat_construction_projects.length > 0 &&
                                objects.flat_construction_projects.map((flat, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <FlatItem
                                            image={flat.image}
                                            category={flat.category.title}
                                            completed_projects={flat.completed_projects}
                                        />
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>
                </Grid>
            </CustomContainer>
            <CustomContainer background={'#FFFFFF'} height=''>
                <Title lineHeight={isMobile ? '45px' : '80px'} color={"black"} fontFamily={"DIN Condensed"}
                       fontSize={isMobile ? '56px' : '108px'}>
                    Ход работы
                </Title>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={5} lg={6}>
                        {objects.work_process && (
                            <Box
                                width="100%" // Makes the image adapt to the grid size
                                height="auto"
                                component="img"
                                src={objects.work_process}
                                sx={{ maxHeight: '470px' }} // Limits max height for larger screens
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={6}>
                        {objects.work_process2 && (
                            <Box
                                width="100%"
                                height="auto"
                                component="img"
                                src={objects.work_process2}
                                sx={{ maxHeight: '470px' }}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={6}>
                        {objects.work_process3 && (
                            <Box
                                width="100%"
                                height="auto"
                                component="img"
                                src={objects.work_process3}
                                sx={{ maxHeight: '470px' }}
                            />
                        )}
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={6}>
                        {objects.work_process4 && (
                            <Box
                                width="100%"
                                height="auto"
                                component="img"
                                src={objects.work_process4}
                                sx={{ maxHeight: '470px' }}
                            />
                        )}
                    </Grid>
                </Grid>

            </CustomContainer>



            <ContactForm/>

            <CustomContainer background={'#FFFFFF'} height=''>
                <Title lineHeight={isMobile ? '45px' : '80px'} color={"black"} fontFamily={"DIN Condensed"}
                       fontSize={isMobile ? '56px' : '108px'}>
                    РАСПОЛОЖЕНИЕ
                </Title>
                <Grid container>
                    <Grid item xs={12} mt={isMobile ? 5 : 0} mb={4}>
                        <Box height={760} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}>
                            <div style={{height: '100%', width: '100%'}}>
                                <MapContainer center={mapCenter} zoom={11} style={{height: '100%', width: '100%'}}>
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker
                                        position={[objects.lat, objects.long]}
                                        icon={icon}
                                    >
                                        <Popup>
                                            {objects?.title || `Marker`}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </CustomContainer>

            <Contacts/>
            <Footer/>
        </>
    );
};

export default ConstructionObjectDetails;


const FlatItem = ({ image, category }: { image: string; category: string }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card sx={{ background: '#FAFAFA', boxShadow: 'none' }}>
                <CardMedia component="img" image={image} alt={category} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="success" onClick={handleOpen}>
                        ПОДРОБНЕЕ
                    </Button>
                </CardActions>
            </Card>

            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'relative',
                        width: '100vw',
                        height: '100vh',
                        bgcolor: 'background.paper',
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                        }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>

                    <img src={image} alt={category} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                </Box>
            </Modal>
        </>
    );
};


