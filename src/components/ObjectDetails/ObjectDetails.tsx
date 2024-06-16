import Navigation from "../Navigation/Navigation.tsx";
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomContainer from "../CustomContainer/CustomContainer.tsx";
import styled from "styled-components";
import backgroundImage from "../../assets/testImg.png";
import Image1 from "../../assets/img1.svg";
import Image2 from "../../assets/img2.svg";
import Image3 from "../../assets/img3.svg";
import Image4 from "../../assets/img4.svg";
import Image5 from "../../assets/img5.svg";
import Image6 from "../../assets/img6.svg";
import Contacts from "../Contacts/Contacts.tsx";
import Footer from "../Footer/Footer.tsx";
import ContactForm from "../ContactForm.tsx";

const details = [
    {
        icon: Image1,
        title: 'Первая линия',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image2,
        title: 'Качественная отделка',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image3,
        title: 'Индивидуальные газовые котлы',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image4,
        title: 'Благоустройство',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image5,
        title: 'Возможность перепланировки',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    },
    {
        icon: Image6,
        title: 'Подземный паркинг',
        description: 'Жилой комплекс «N1» необычен своей архитектурой в Хай – Тек стиле.'
    }
];

const DetailItem = ({ icon, title, description } : {icon: string; title:string; description: string}) => (
    <Box sx={{ textAlign: 'center', padding: 4, border: 'none', borderRadius: 2, backgroundColor: '#F7F7F7' }}>
        <img src={icon} alt={title} style={{
            marginBottom: 10,
            width: "213px",
            height: '180px',
        }} />
        <Typography variant="h6" component="h3" sx={{ marginBottom: 1 }}>
            {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
            {description}
        </Typography>
    </Box>
);

const Title = styled(Typography)`
    font-size: 108px;
    font-weight: 600;
    line-height: 54px;
    text-align: left;
    color: #FFFFFF;
`;

const Description = styled(Typography)`
    font-size: 26px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: #FFFFFF;
    text-transform: uppercase;
`;

const ObjectDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
      <>
          <Navigation/>
          <CustomContainer
              backgroundImage={`url(${backgroundImage})`}
          >
              <Box>
                  <Title lineHeight={isMobile ? '45px' : '80px'} width={isMobile ? '256px' : '827px'}
                         fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>Жилой комплекс №1</Title>
                  <Description mt={isMobile ? 5 : 10} lineHeight={isMobile ? '20px' : ''} fontSize={isMobile ? '12' : ''}>
                      Адрес
                  </Description>
              </Box>
              {
                  isMobile &&
                  <Box display='flex' justifyContent='center' alignContent='end' position='absolute' bottom={10}
                       left={'47%'}>
                      <KeyboardArrowDownIcon fontSize={'large'} sx={{color: 'white'}}/>
                  </Box>}
          </CustomContainer>
          <CustomContainer background={'#FFFFFF'} height=''>
              <Title lineHeight={isMobile ?  '45px' : '80px'} color={"black"} fontFamily={"DIN Condensed"} fontSize={isMobile ? '56px' : '108px'}>
                  О проекте
              </Title>

              <Grid container spacing={3} justifyContent="center" mb={4} mt={4}>
                  {details.map((detail, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                          <DetailItem
                              icon={detail.icon}
                              title={detail.title}
                              description={detail.description}
                          />
                      </Grid>
                  ))}
              </Grid>

          </CustomContainer>

          <ContactForm/>
          <Contacts/>
          <Footer/>
      </>
    );
};

export default ObjectDetails;
