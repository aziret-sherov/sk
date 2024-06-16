import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";
import styled from "styled-components";
import NewsCarusel from "./NewsCarusel.tsx";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
`;

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

export interface INew {
    description: string;
    id: number
    image_url: string
    news_date: string
    title: string
}

const News = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [objects, setObjects] = useState<INew[]>([])

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
        <CustomContainer background={'#FFFFFF'} height=''>
            <Title lineHeight={isMobile ?  '45px' : '80px'} mt={4} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                Новости
            </Title>
            <Grid container mt={5} mb={5}>
                <Grid item xs={12}>
                    <NewsCarusel objects={objects}/>
                </Grid>
                <Grid item xs={12} mt={5} justifyContent={'center'} display={"flex"}>
                    <StyledButton>
                        все новости
                    </StyledButton>
                </Grid>
            </Grid>
        </CustomContainer>
    );
};

export default News;