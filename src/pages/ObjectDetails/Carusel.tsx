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
import styled from "styled-components";

const Carusel = ({ objects }: { objects: { image:string }[] }) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const onChangeIndex = (index: number) => {
        setSlideIndex((index + groupedObjects.length) % groupedObjects.length);
    };

    const chunkArray = (array: { image:string }[], size: number) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    const groupedObjects = chunkArray(objects, 1);

    return (
        <>
        <Box display={'flex'} alignItems={'center'} position="relative" justifyContent="center">
            {!isMobile && (
                <Box
                    onClick={() => onChangeIndex(slideIndex - 1)}
                    position="absolute"
                    left={16}
                    zIndex={1}
                    style={{ cursor: 'pointer' }}>
                    <Box height={50} component={'img'} src={RotatedArrow} />
                </Box>
            )}

            <SwipeableViews
                style={{ padding: '0', margin: 0, width: '100%' }}
                slideStyle={{ padding: '5px', margin: 0, width: '100%' }}
                enableMouseEvents
                springConfig={{ duration: '0.6s', easeFunction: 'ease-in-out', delay: '0s' }}
                onChangeIndex={onChangeIndex}
                index={slideIndex}
            >
                {
                    groupedObjects.map((group, index) => (
                        <Box key={index} display="flex" justifyContent="center" width="100%">
                            {group.map((item, itemIndex) => (
                                <Card key={itemIndex} style={{ marginRight: 20, boxShadow: 'none', width: '88%' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height={isMobile ? '300px' : "960px"}
                                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                                            image={item.image || backgroundImage || ''}
                                        />
                                    </CardActionArea>
                                </Card>
                            ))}
                        </Box>
                    ))
                }
            </SwipeableViews>

            {!isMobile && (
                <Box
                    onClick={() => onChangeIndex(slideIndex + 1)}
                    position="absolute"
                    right={16}
                    zIndex={1}
                    style={{ cursor: 'pointer' }}>
                    <Box height={50} component={'img'} src={Arrow} />
                </Box>
            )}
        </Box>
        <Box display={'flex'} alignItems={'center'} position="relative" justifyContent="center" width='100%'>
            <PaginationDots dots={groupedObjects.length} index={slideIndex} onChangeIndex={onChangeIndex} />
        </Box>
    </>
    );
};

export default Carusel;



const Dot = styled.div<{ active: boolean }>`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? "#008E39" : "#CCCCCC")};
  border-radius: 50%;
  display: inline-block;
`;


const PaginationDots = ({ dots, index, onChangeIndex }: { dots: number; index: number; onChangeIndex: (index: number) => void }) => {
    return (
        <Box display="flex" justifyContent="center" mt={2}>
            {Array.from({ length: dots }).map((_, i) => (
                <Dot key={i} active={i === index} onClick={() => onChangeIndex(i)} />
            ))}
        </Box>
    );
};