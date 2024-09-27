import Arrow from '../../assets/slider_arrow.svg';
import RotatedArrow from '../../assets/rotated-arrow.svg';
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
import { INew } from "./News.tsx";
import backgroundImage from "../../assets/testImg.png";
import {useNavigate} from "react-router-dom";

const NewsCarusel = ({ objects }: { objects: INew[] }) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    const onChangeIndex = (index: number) => {
        setSlideIndex((index + groupedObjects.length) % groupedObjects.length);
    };

    const chunkArray = (array: INew[], size: number) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    const groupedObjects = chunkArray(objects, isMobile ? 1 : 3);

    return (
        <Box display={'flex'} alignItems={'center'}>
            {!isMobile && (
                <Box onClick={() => onChangeIndex(slideIndex - 1)} mr={4}>
                    <Box height={50} component={'img'} src={RotatedArrow} />
                </Box>
            )}

            <SwipeableViews
                style={{ padding: '0', margin: 0, width: '100%' }}
                slideStyle={{ padding: '5px', margin: 0, width: '100%' }}
                enableMouseEvents
                onChangeIndex={onChangeIndex}
                index={slideIndex}
            >
                {
                    groupedObjects.map((group, index) => (
                        <Box key={index} display="flex" justifyContent="center" width="100%">
                            {group.map((item, itemIndex) => (
                                <Card key={itemIndex} style={{ marginRight: 20, boxShadow: 'none',  width: isMobile ? '100%' : '45%' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height={isMobile ? '500px' : "400"}
                                            image={item.image_url || backgroundImage || ''}
                                        />
                                        <CardContent
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                flexDirection: 'column',
                                            }}>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {item.description}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Button variant={'contained'} color={"success"} onClick={()=>navigate(`/news/${item.id}`)}>ПОДРОБНЕЕ</Button>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                        </Box>
                    ))
                }
            </SwipeableViews>

            {!isMobile && (
                <Box onClick={() => onChangeIndex(slideIndex + 1)} ml={4}>
                    <Box height={50} component={'img'} src={Arrow} />
                </Box>
            )}
        </Box>
    );
};

export default NewsCarusel;
