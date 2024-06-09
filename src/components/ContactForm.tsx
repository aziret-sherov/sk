import React, { useState } from 'react';
import CustomContainer from "./CustomContainer/CustomContainer.tsx";
import {
    Alert,
    Box,
    Button, Grid,
    InputLabel, Snackbar, TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import backgroundImage from '../assets/contact-form-image.png';
import styled from "styled-components";
import axiosInstance from "../axios.ts";
import {ApiPaths} from "../apiPath.ts";

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
    const [openSnackbar, setOpenSnackbar]= useState(false);

    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axiosInstance.post(ApiPaths.consultation_form, {
                name: formData.name,
                phone: formData.phone
            });
            setOpenSnackbar(true)
            setFormData({ name: '', phone: '' })
        } catch (error) {
            console.error('Error submitting form data', error);
        }
    };

    const handleSnackbarClose = ()=>{
        setOpenSnackbar(false)
    }

    return (
        <CustomContainer
            background="#FFFFFF"
            height="500px"
            backgroundImage={`url(${backgroundImage})`}
        >
            <form onSubmit={handleSubmit}>
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
                                    <InputLabel htmlFor="name" style={{color: 'white'}}>Ваше имя</InputLabel>
                                    <TextField
                                        variant="outlined"
                                        id="name"
                                        name="name"
                                        placeholder={'Ваше имя'}
                                        value={formData.name}
                                        onChange={handleChange}
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
                                    <InputLabel htmlFor="phone" style={{color: 'white'}}>Ваш телефон</InputLabel>
                                    <TextField
                                        variant="outlined"
                                        id="phone"
                                        name="phone"
                                        placeholder={'0 (990) 90 90 90'}
                                        value={formData.phone}
                                        onChange={handleChange}
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
                                <Button type="submit" variant={"contained"} color={"success"} fullWidth style={{marginTop: isMobile ? 0 : 45}}>
                                    отправить
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message="Сахранено"
                key="top-center"
            >
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Сахранено
                </Alert>
            </Snackbar>
        </CustomContainer>
    );
};

export default ContactForm;
