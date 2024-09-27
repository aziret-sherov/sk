import Navigation from "../../components/Navigation/Navigation.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import {
    Box,
    Button, Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import CustomContainer from "../../components/CustomContainer/CustomContainer.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";
import {INew} from "../../components/News/News.tsx";
import backgroundImage from "../../assets/testImg.png";
import {useNavigate} from "react-router-dom";

const NewsList = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [objects, setObjects] = useState<INew[]>([])
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(ApiPaths.news);
            setObjects(response.data.results)
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <Navigation/>

            <CustomContainer background={'#FFFFFF'} height=''>
                <Typography lineHeight={isMobile ?  '45px' : '80px'} mt={4} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                    Новости
                </Typography>
                <Grid container mt={5} mb={5}>
                    <Grid item xs={12} >
                        <Grid container spacing={3}>
                            {objects.length > 0 &&
                                objects.map((item, itemIndex) => (
                                <Grid item xs={12} sm={6} md={4} key={itemIndex}> {/* xs=12 ensures proper stacking on mobile */}
                                    <Card style={{ marginRight: 20, boxShadow: 'none', width: '100%' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={isMobile ? '500px' : "400"}
                                                image={item.image_url || backgroundImage || ''}
                                            />
                                            <CardContent
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    flexDirection: 'column',
                                                }}>
                                                <Box>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Button variant={'contained'} color={"success"} onClick={()=>navigate(`/news/${item.id}`)}>ПОДРОБНЕЕ</Button>
                                                </Box>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>
                </Grid>
            </CustomContainer>

            <Footer/>
        </>
    );
};

export default NewsList;