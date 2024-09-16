import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import styled from "styled-components";
import {Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import CustomCarusel from "./CustomCarusel.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
`;

// const StyledButton = styled.div`
//     display: flex;
//     justify-content: center;
//     color: #008E39;
//     padding: 10px;
//     border-radius: 4px;
//     cursor: pointer;
//     border: 2px solid #008E39;
//     width: 300px;
//     font-size: 20px;
//     font-weight: 500;
//     line-height: 24px;
//     text-align: left;
// `;

export interface IObject {
    id: number,
    completed_projects_images: {
        id: number;
        image: string;
    }[],
    construction_projects_images: {
        id: number;
        image: string;
    }[],
    about_construction_projects: [],
    title: string,
    description: string,
    address: string
}

const Objects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [objects, setObjects] = useState<IObject[]>([])
    // const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(ApiPaths.construction_projects);
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
            <Title lineHeight={isMobile ?  '45px' : '80px'} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                Строящиеся объекты
            </Title>
            {
                objects.map(object=>(<CustomCarusel object={object} objects={objects}/>))
            }
            <Grid container mt={5} mb={5}>
            {/*    <Grid item xs={12} justifyContent={'center'} display={"flex"}>*/}
            {/*        <StyledButton onClick={()=>navigate('construction_projects')}>*/}
            {/*            посмотреть все объекты*/}
            {/*        </StyledButton>*/}
            {/*    </Grid>*/}
            </Grid>

        </CustomContainer>
    );
};

export default Objects;