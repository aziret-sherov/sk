import Navigation from "../../components/Navigation/Navigation.tsx";
import {
    Box, Button,
    Grid,
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
import {useEffect, useState} from "react";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";
import Carusel from "../ObjectDetails/Carusel.tsx";


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
        flat_construction_projects: [],
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
                    Галлерея
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

            <Contacts/>
            <Footer/>
        </>
    );
};

export default ConstructionObjectDetails;
