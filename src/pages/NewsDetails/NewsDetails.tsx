import CustomContainer from "../../components/CustomContainer/CustomContainer.tsx";
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Footer from "../../components/Footer/Footer.tsx";
import Navigation from "../../components/Navigation/Navigation.tsx";
import styled from "styled-components";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
    color: #FFFFFF;
`;
const NewsDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const params = useParams();
    const [objects, setObjects] = useState({
        id: 0,
        news_inner_title: [],
        title: "",
        description: "",
        news_date: "",
        image_url: ""
    })

    const fetchData = async () => {
        if (params?.id){
            try {
                const response = await axiosInstance.get(ApiPaths.news_details(params?.id));
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
            <CustomContainer background={'#FFFFFF'} height=''>
                <Grid container>
                    <Grid item xs={12} mb={4}>
                        <Title lineHeight={isMobile ? '45px' : '80px'} color='black' mt={4} fontFamily={"DIN Condensed"}
                               fontSize={isMobile ? '56px' : '108px'}>
                            {objects.title}
                        </Title>
                    </Grid>
                    <Grid item xs={12} mt={isMobile ? 5 : 0} mb={4}>
                        <Grid container>
                            <Grid item xs={isMobile ? 12 : 6} p={2}>
                                {objects.description}
                            </Grid>
                            <Grid item xs={isMobile ? 12 : 6}>
                                <Box
                                    component={'img'}
                                    src={objects.image_url || ''}
                                    sx={{
                                        backgroundColor: '#DCDCDC',
                                        borderRadius: '4px',
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover',
                                        maxHeight: '500px',
                                    }}
                                />
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </CustomContainer>
            <Footer/>

        </>
    );
};

export default NewsDetails;