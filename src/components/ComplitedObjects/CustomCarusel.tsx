import { Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import logoImage from '../../assets/mocImage.png';
import pinImage from '../../assets/pin.svg';

const mocItems = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image: logoImage
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        image: logoImage
    },
    {
        name: "Random Name #3",
        description: "Hello World!",
        image: logoImage
    },
    {
        name: "Random Name #4",
        description: "Hello World!",
        image: logoImage
    },
    {
        name: "Random Name #5",
        description: "Hello World!",
        image: logoImage
    }
]


const StyledImage = styled.img`
    width: 100%;
    height: 100%;
`;


const StyledButton = styled.div`
    background:#008E39; 
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

const CustomCarusel = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid container mt={5}>
            <Grid item xs={11}>
                <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Subtitle variant='body1' fontFamily={'Geologica, serif'}>
                                Жилой комплекс
                            </Subtitle>
                            <Title fontFamily={"DIN Condensed"} lineHeight={'64px'} fontSize={'64px'} mt={1}>
                                ОБЪЕКТ №1
                            </Title>
                        </Grid>
                        <Grid item xs={6} display='flex' alignItems={'end'} pb={2}>
                            <img src={pinImage} width={24} height={24} alt="address"/>
                            <Subtitle variant='body1' fontFamily={'Geologica, serif'} ml={1}>
                                ул. Кулатова, 123а
                            </Subtitle>
                        </Grid>
                    </Grid>
                </Grid>
                <Carousel
                    NextIcon={<ArrowForwardIosIcon/>}
                    PrevIcon={<ArrowBackIosIcon />}
                    navButtonsAlwaysVisible
                    height={'600px'}
                    animation={'slide'}
                    swipe={isMobile}
                    autoPlay={false}
                    IndicatorIcon={!isMobile ? <></> : undefined}
                >
                    {
                        mocItems.map((item, index) => (
                            <StyledImage src={item.image} key={index}/>
                        ))
                    }
                </Carousel>
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
