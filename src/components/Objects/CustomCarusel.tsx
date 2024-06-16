import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
    IconButton
} from "@mui/material";
import styled from "styled-components";
import SwipeableViews from 'react-swipeable-views';
import pinImage from '../../assets/pin.svg';
import {useState} from "react";
import {IObject} from "./Objects.tsx";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledNumbers = styled(Typography)<{ hovered: boolean }>`
    color: ${({hovered}) => (hovered ? `#008E39` : `#CCCCCC`)};
`;

const StyledButton = styled.div`
    background: #008E39;
    color: white;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
`;

const Subtitle = styled(Typography)`
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
`;

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
`;

const CustomCarusel = ({object, objects}: { object: IObject; objects?: IObject[] }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [slideIndex, setSlideIndex] = useState<number>(0)

    const onChangeIndex = (index: number) => {
        setSlideIndex(index)
    }

    const handleNext = () => {
        if (slideIndex < object.construction_projects_images.length - 1) {
            setSlideIndex(slideIndex + 1);
        }
    };

    const handlePrev = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        }
    };

    return (
        <Grid container mt={5}>
            {!isMobile && <Grid item xs={1}>
                {
                    objects?.map((obj, index) =>
                        <StyledNumbers key={index} fontFamily={"DIN Condensed"}
                                       fontSize={index === 2 ? '48px' : '40px'}
                                       fontWeight={700}
                                       hovered={obj === object}
                                       lineHeight={1}>
                            №{index + 1}
                        </StyledNumbers>
                    )
                }
            </Grid>}
            <Grid item xs={isMobile ? 12 : 11}>
                <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Subtitle variant='body1' fontFamily={'Geologica, serif'}>
                                Жилой комплекс
                            </Subtitle>
                            <Title fontFamily={"DIN Condensed"} lineHeight={'64px'}
                                   fontSize={isMobile ? '36px' : '64px'} mt={1}>
                                {object.title}
                            </Title>
                        </Grid>
                        <Grid item xs={isMobile ? 8 : 6} display='flex' alignItems={'end'} pb={2}>
                            <img src={pinImage} width={24} height={24} alt="address"/>
                            <Subtitle variant='body1' fontFamily={'Geologica, serif'} ml={1}>
                                {object.address}
                            </Subtitle>
                        </Grid>
                    </Grid>
                </Grid>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <Box display={'flex'} alignItems={'center'}>
                        <IconButton
                            onClick={handlePrev}
                            disabled={slideIndex === 0}
                            style={{
                                position: 'absolute', left: 20, zIndex: 1, background: '#008E3980',
                                borderRadius: '30px',
                            }}
                        >
                            <ArrowBackIcon style={{
                                color: 'white',
                            }}/>
                        </IconButton>
                        <SwipeableViews
                            style={{padding: '0', margin: 0,}}
                            slideStyle={{padding: '0', margin: 0, width: '85%', marginRight: 20}}
                            enableMouseEvents
                            onChangeIndex={onChangeIndex}
                            index={slideIndex}
                        >
                            {
                                object.construction_projects_images.map((item, index) => (
                                    <Card key={index}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height={isMobile ? '500' : "600"}
                                                image={item.image}
                                            />
                                        </CardActionArea>
                                    </Card>
                                ))
                            }
                        </SwipeableViews>
                        <IconButton
                            onClick={handleNext}
                            disabled={slideIndex === object.construction_projects_images.length - 1}
                            style={{
                                position: 'absolute',
                                right: 20, zIndex: 1,
                                background: '#008E3980',
                                borderRadius: '30px',
                            }}
                        >
                            <ArrowForwardIcon
                                style={{
                                    color: 'white',
                                }}/>
                        </IconButton>
                    </Box>
                </div>
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'center'} mt={2}>
                <StyledButton>
                    Подробнее
                </StyledButton>
            </Grid>
        </Grid>
    );
};

export default CustomCarusel;
