import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReactPlayer from 'react-player';
import axiosInstance from '../../axios.ts';
import { ApiPaths } from '../../apiPath.ts';
import CustomContainer from "../CustomContainer/CustomContainer.tsx";

const BackgroundVideo = styled(ReactPlayer)`
    //position: absolute;
    //top: 0;
    //left: 0;
    //z-index: 1;
`;

const MainContainer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isMuted, setIsMuted] = useState(true);

    const [animations, setAnimations] = useState([{
        id: 0,
        small_title: '',
        big_title: '',
        image: '',
    }]);

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(ApiPaths.logo_animation);
            setAnimations(response.data.results);
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <CustomContainer>
            {
                animations[0].image &&
                <BackgroundVideo
                    url={animations[0].image}
                    playing={true}
                    loop={true}
                    muted={isMuted}
                    width='100%'
                    height='100%'
                />
            }
            <div style={{position: 'absolute', bottom: 10, right: 40}}>
                {
                    isMuted
                        ? <button onClick={() => setIsMuted(false)}>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px"
                                 viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                                <g>
                                    <polygon fill="green" stroke="green" stroke-width="2" stroke-miterlimit="10"
                                             points="4,32 4,20 16,20 34,2 34,32 34,62 16,44	4,44 	"/>
                                    <line fill="green" stroke="green" stroke-width="2" stroke-miterlimit="10" x1="42"
                                          y1="23" x2="60" y2="41"/>
                                    <line fill="green" stroke="green" stroke-width="2" stroke-miterlimit="10" x1="42"
                                          y1="41" x2="60" y2="23"/>
                                </g>
                            </svg>
                        </button>
                        : <button onClick={() => setIsMuted(true)}>
                            <svg width="28px" height="28px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                 fill="green">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M1.5 4.83h2.79L8.15 1l.85.35v13l-.85.33-3.86-3.85H1.5l-.5-.5v-5l.5-.5zM4.85 10L8 13.14V2.56L4.85 5.68l-.35.15H2v4h2.5l.35.17zM15 7.83a6.97 6.97 0 0 1-1.578 4.428l-.712-.71A5.975 5.975 0 0 0 14 7.83c0-1.4-.48-2.689-1.284-3.71l.712-.71A6.971 6.971 0 0 1 15 7.83zm-2 0a4.978 4.978 0 0 1-1.002 3.004l-.716-.716A3.982 3.982 0 0 0 12 7.83a3.98 3.98 0 0 0-.713-2.28l.716-.716c.626.835.997 1.872.997 2.996zm-2 0c0 .574-.16 1.11-.44 1.566l-.739-.738a1.993 1.993 0 0 0 .005-1.647l.739-.739c.276.454.435.988.435 1.558z"/>
                            </svg>
                        </button>
                }

            </div>
            {isMobile && (
                <Box display='flex' justifyContent='center' alignContent='end' position='absolute' bottom={10}
                     left={'47%'}>
                    <KeyboardArrowDownIcon fontSize={'large'} sx={{color: 'white'}}/>
                </Box>
            )}
        </CustomContainer>
    );
};

export default MainContainer;
