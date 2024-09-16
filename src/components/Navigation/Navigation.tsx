import {
    AppBar, Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem, ListItemText,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import logoImage from '../../assets/nav-logo.png';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const StyledNavButton = styled(Button)`
    font-weight: 600;
`;

const StyledListItemText = styled(ListItemText)`
    color: white;
    
    span{
        display: flex;
        justify-content: center;
        font-size: 24px;
        font-weight: 600;
        line-height: 26px;
        text-align: left;
    }
`;

const Navigation = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const list = () => (
        <List sx={{ marginTop: '20px' }}>
            {['ОБЪЕКТЫ', 'О КОМПАНИИ', 'КОНТАКТЫ'].map((text, index) => (
                <ListItem key={index}>
                    <StyledListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    );
    return (
        <>
            <AppBar position="absolute" sx={{p: '15px', background: '#008E39', height: '80px'}}>
                <Toolbar>
                    <Box component="div" sx={{ flexGrow: 1 }}>
                        <img src={logoImage} alt="Logo" style={{maxHeight: '50px'}}/>
                    </Box>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                PaperProps={{
                                    sx: { width: "100%", background: '#008E39' },
                                }}
                                anchor="right"
                                open={drawerOpen}
                            >
                                <ListItem sx={{ justifyContent: 'end', padding: '10px' }}>
                                    <Box component="div" sx={{ flexGrow: 1 }}>
                                        <img src={logoImage} alt="Logo" style={{maxHeight: '40px'}}/>
                                    </Box>
                                    <CloseIcon sx={{ color: 'white' }} onClick={handleDrawerClose} fontSize="large"/>
                                </ListItem>
                                {list()}
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <StyledNavButton color="inherit"
                                             onClick={()=>{
                                                 navigate('/');
                                             }}
                            >ОБЪЕКТЫ</StyledNavButton>
                            <StyledNavButton onClick={()=>{
                                navigate('/about');
                            }} color="inherit">О КОМПАНИИ</StyledNavButton>
                            <StyledNavButton color="inherit"
                                             onClick={()=>{
                                                 navigate('/');
                                             }}
                            >КОНТАКТЫ</StyledNavButton>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Box mt='30px'/>
        </>
    );
};

export default Navigation;
