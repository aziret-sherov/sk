import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import {Grid, Paper, Typography, useMediaQuery, useTheme} from "@mui/material";
import styled from "styled-components";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";
import {useEffect, useState} from "react";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
`;

const Item = styled(Paper)`
    border: none;
    height: 300px;
`;

const StyledButton = styled.div`
    background: #008E39;
    color: white;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
`;

const References = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [references, setReference] = useState<{image_url: string}[]>([])

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(ApiPaths.reference);
            setReference(response.data.results)
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <CustomContainer background={'#FFFFFF'} height={''}>
            <Title lineHeight={isMobile ? '45px' : '80px'} fontFamily={"DIN Condensed"}
                   fontSize={isMobile ? '56px' : '108px'}>
                Преимущества
            </Title>
            <Grid container={!isMobile} mt={5} spacing={6} display={"flex"} flexDirection={isMobile ? "column" : "row"}>
                {
                    references.map((reference) => (
                            <Grid item xs={4}>
                                <Item sx={{boxShadow: 'none', backgroundImage: `url(${reference.image_url})`}}/>
                            </Grid>
                        )
                    )
                }
                <Grid item xs={12} display={'flex'} justifyContent={'center'} mt={2}>
                    <StyledButton>
                        Подробнее
                    </StyledButton>
                </Grid>
            </Grid>
        </CustomContainer>
    );
};

export default References;