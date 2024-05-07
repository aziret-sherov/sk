import logoImage from "../../../assets/mocImage.png";
import Arrow from '../../../assets/slider_arrow.svg';
import RotatedArrow from '../../../assets/rotated-arrow.svg';
import SwipeableViews from 'react-swipeable-views';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {useState} from "react";

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
];

const Carusel = () => {
    const [slideIndex, setSlideIndex] = useState<number>(0)
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const onChangeIndex = (index: number)=>{
        setSlideIndex(index)
    }
    return (
        <Box display={'flex'} alignItems={'center'} >
            {!isMobile && <Box onClick={() => onChangeIndex(0)} mr={4}>
                <Box height={50} component={'img'} src={RotatedArrow}/>
            </Box>}
            <SwipeableViews
                style={{padding: '0', margin: 0,}}
                slideStyle={{padding: '5px', margin: 0}}
                enableMouseEvents
                onChangeIndex={onChangeIndex}
                index={slideIndex}
            >
                {
                    mocItems.map((item) => (
                        <div style={{height:  '100%', width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Card style={{marginRight: 20}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height={isMobile ? '500px' : "600"}
                                        image={item.image}
                                    />
                                    <CardContent
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                        <Box>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                            <Typography variant="h6" color="text.primary">
                                                ул. Ленина 15
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Button variant={'contained'} color={"success"}>подробнее</Button>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            {!isMobile && <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="600"
                                        image={item.image}
                                    />
                                    <CardContent
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                        <Box>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                            <Typography variant="h6" color="text.primary">
                                                ул. Ленина 15
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Button variant={'contained'} color={"success"}>подробнее</Button>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>}
                        </div>
                    ))
                }
            </SwipeableViews>
            {!isMobile && <Box onClick={() => onChangeIndex(mocItems.length - 1)} ml={4}>
                <Box height={50} component={'img'} src={Arrow}/>
            </Box>}
        </Box>
    );
};

export default Carusel;