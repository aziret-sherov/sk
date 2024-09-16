import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import pinImage from '../../assets/pin.svg';
import styled from "styled-components";
import {useEffect, useState} from "react";
import axiosInstance from "../../axios.ts";
import {ApiPaths} from "../../apiPath.ts";

export interface IContact {
    icon: string;
    id: number;
    number: string;
    type: string;
}

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
`;

const Contacts = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [addresses, setAddresses] = useState([{address:''}])

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(ApiPaths.contacts);
            setContacts(response.data.results)
        } catch (error) {
            console.error('Error fetching data', error);
            throw error;
        }
    }

    const fetchAddresses = async () => {
        try {
            const response = await axiosInstance.get(ApiPaths.address);
            setAddresses(response.data.results)
        } catch (error) {
            console.error('Error fetching addresses', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchData()
        fetchAddresses()
    }, []);

    return (
        <CustomContainer background={'#FFFFFF'} height=''>
            <Grid container>
                <Grid item xs={isMobile ? 12 : 4}>
                    <Grid container gap={1}>
                        <Grid item xs={12}>
                            <Title lineHeight={'45px'} fontFamily={"DIN Condensed"} fontSize={'56px'}>
                                Контакт
                            </Title>
                        </Grid>
                        {
                            contacts.map((contact)=>
                                <Grid display={'flex'} item xs={12}>
                                    <Box height={25} component={'img'} src={contact.icon}/>
                                    <Typography ml={2}>{contact.number}</Typography>
                                </Grid>
                            )
                        }
                        {
                            addresses.length > 0 &&
                            addresses.map((address)=>
                                <Grid display={'flex'} item xs={12}>
                                    <Box height={25} component={'img'} src={pinImage}/>
                                    <Typography ml={2}>{address?.address}</Typography>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={isMobile ? 12 : 8} mt={isMobile ? 5 : 0} mb={4}>
                    <Box height={600} sx={{backgroundColor: '#DCDCDC', borderRadius: '4px'}}>

                    </Box>
                </Grid>
            </Grid>
            {/*<Grid item xs={12} mt={4} justifyContent={"center"} display={"flex"}>*/}
            {/*    <Box*/}
            {/*        display={"flex"}*/}
            {/*        alignItems={'end'}*/}
            {/*        ml={2}*/}
            {/*        mb={5}*/}
            {/*    >*/}
            {/*        <Button variant={"contained"} color={"success"} fullWidth>*/}
            {/*            получить консультацию*/}
            {/*        </Button>*/}
            {/*    </Box>*/}
            {/*</Grid>*/}
        </CustomContainer>
    );
};

export default Contacts;