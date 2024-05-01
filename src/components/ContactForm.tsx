import CustomContainer from "./CustomContainer/CustomContainer.tsx";
import {
    Box, Button,
    Input,
    InputLabel,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import backgroundImage from '../assets/contact-form-image.png';
import styled from "styled-components";

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
    color: white;
`;

const ContactForm = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <CustomContainer
            background="#FFFFFF"
            height="500px"
            backgroundImage={`url(${backgroundImage})`}
        >
            <Box display={'flex'} justifyContent={'start'} alignItems={"start"} flexDirection={'column'}>
                <Title
                    lineHeight={isMobile ? '45px' : '80px'}
                    fontFamily={"DIN Condensed"}
                    fontSize={isMobile ? '56px' : '108px'}
                    ml={5}
                    mb={5}
                >
                    Получить консультацию
                </Title>
                <Box
                    component="form"
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"start"}
                        width={"70%"}
                    >
                        <Box
                            width={"50%"}
                        >
                                <InputLabel htmlFor="component-simple" style={{color: 'white'}} >Ваше имя</InputLabel>
                                <Input fullWidth id="component-simple" placeholder={'Ваше имя'} style={{background: 'white'}}/>
                        </Box>
                        <Box
                            width={"50%"}
                            ml={2}
                        >
                                <InputLabel htmlFor="component-simple" style={{color: 'white'}}>Name</InputLabel>
                                <Input fullWidth id="component-simple" placeholder={'Ваше имя'} style={{background: 'white'}}/>
                        </Box>
                        <Box
                            width={"30%"}
                            ml={2}
                            display={"flex"}
                            alignItems={'end'}
                        >
                            <Button variant={"contained"} color={"success"} fullWidth>
                                отправить
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CustomContainer>
    );
};

export default ContactForm;
