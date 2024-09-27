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
import { useState } from "react";
import { IObject } from "../../Objects/Objects.tsx";
import {useNavigate} from "react-router-dom";

const Carusel = ({ objects }: { objects: IObject[] }) => {
    const navigate = useNavigate();
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const onNext = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % Math.ceil(objects.length / 2));
    };

    const onPrev = () => {
        setSlideIndex((prevIndex) =>
            prevIndex === 0 ? Math.ceil(objects.length / 2) - 1 : prevIndex - 1
        );
    };

    const onChangeIndex = (index: number) => {
        setSlideIndex(index);
    };

    const getChunks = (arr: IObject[], size: number) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const objectPairs = isMobile ? getChunks(objects, 1) : getChunks(objects, 2);

    return (
        <Box display={'flex'} alignItems={'center'}>
            {!isMobile && (
                <Box onClick={onPrev} mr={4}>
                    <Box height={50} component={'img'} src={RotatedArrow} />
                </Box>
            )}
            <SwipeableViews
                style={{ padding: '0', margin: 0 }}
                slideStyle={{ padding: '5px', margin: 0 }}
                enableMouseEvents
                onChangeIndex={onChangeIndex}
                index={slideIndex}
            >
                {objectPairs.map((pair, pairIndex) => (
                    <div
                        key={pairIndex}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        {pair.map((item, index) => (
                            <Card key={index} style={{ marginRight: 20, boxShadow: 'none', width: isMobile ? '100%' : '45%' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height={isMobile ? '300px' : "600"}
                                        image={item.completed_projects_images[0].image || ''}
                                    />
                                    <CardContent
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Box>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                            <Typography variant="h6" color="text.primary">
                                                {item.address}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Button
                                                variant={'contained'}
                                                color={"success"}
                                                onClick={()=>navigate(`/object/${item.id}`)}
                                            >ПОДРОБНЕЕ</Button>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </div>
                ))}
            </SwipeableViews>
            {!isMobile && (
                <Box onClick={onNext} ml={4}>
                    <Box height={50} component={'img'} src={Arrow} />
                </Box>
            )}
        </Box>
    );
};

export default Carusel;
