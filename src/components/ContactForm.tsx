import CustomContainer from "./CustomContainer/CustomContainer.tsx";
import {
    Box,
    Button, Grid,
    InputLabel, TextField,
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
            <Grid container>
                <Grid item xs={12}>
                    <Title
                        lineHeight={isMobile ? '45px' : '80px'}
                        fontFamily={"DIN Condensed"}
                        fontSize={isMobile ? '56px' : '108px'}
                        ml={5}
                        mb={5}
                    >
                        Получить консультацию
                    </Title>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={isMobile ? 12 : 5}>
                            <Box p={2}>
                                <InputLabel htmlFor="component-simple" style={{color: 'white'}}>Ваше имя</InputLabel>
                                <TextField
                                    variant="outlined"
                                    id="component-simple"
                                    placeholder={'Ваше имя'}
                                    style={{
                                        borderRadius: '5px'
                                    }}
                                    inputProps={{
                                        style: {
                                            border: "none",
                                            background: 'white'
                                        }
                                    }}
                                    fullWidth
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={isMobile ? 12 : 5}>
                            <Box p={2}>
                                <InputLabel htmlFor="component-simple" style={{color: 'white'}}>Ваш телефон</InputLabel>
                                <TextField
                                    variant="outlined"
                                    id="component-simple"
                                    placeholder={'0 (990) 90 90 90'}
                                    style={{
                                        borderRadius: '5px'
                                    }}
                                    inputProps={{
                                        style: {
                                            border: "none",
                                            background: 'white'
                                        }
                                    }}
                                    fullWidth
                                />

                            </Box>
                        </Grid>
                        <Grid item xs={isMobile ? 12 : 2}>
                                <Button variant={"contained"} color={"success"} fullWidth style={{marginTop: isMobile ? 0 : 45}}>
                                    отправить
                                </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CustomContainer>
    );
};

export default ContactForm;
