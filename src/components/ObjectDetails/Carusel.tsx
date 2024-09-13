import Arrow from '../../assets/slider_arrow.svg';
import RotatedArrow from '../../assets/rotated-arrow.svg';
import SwipeableViews from 'react-swipeable-views';
import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { useState } from "react";
import backgroundImage from "../../assets/testImg.png";

const Carusel = ({ objects }: { objects: string[] }) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const onChangeIndex = (index: number) => {
        setSlideIndex((index + groupedObjects.length) % groupedObjects.length);
    };

    const chunkArray = (array: string[], size: number) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    const groupedObjects = chunkArray(objects, isMobile ? 1 : 3);

    console.log('test', groupedObjects)
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
                                            image={item || backgroundImage || ''}
                                        />
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

export default Carusel;
