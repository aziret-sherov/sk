import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import styled from "styled-components";
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Carusel from "./components/Carusel.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";
import {IObject} from "../Objects/Objects.tsx";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
`;

const ComplitedObjects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [objects, setObjects] = useState<IObject[]>([])
    const localHre = window.location.pathname


    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(ApiPaths.completed_projects);
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
            {
                localHre !== '/about' &&
                <Title lineHeight={isMobile ?  '45px' : '80px'} mt={4} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                    Завершённые объекты
                </Title>
            }
            <Grid container mt={5} mb={5}>
                <Grid item xs={12}>
                    {
                        objects.length > 0 &&
                        <Carusel objects={objects}/>
                    }
                </Grid>
                {/*<Grid item xs={12} mt={5} justifyContent={'center'} display={"flex"}>*/}
                {/*    <StyledButton>*/}
                {/*        посмотреть все объекты*/}
                {/*    </StyledButton>*/}
                {/*</Grid>*/}
            </Grid>
        </CustomContainer>
    );
};

export default ComplitedObjects;