import {Container, Logo, Nav, NavItems, NavLink, HamburgerIcon, BurgerLine} from "./styles.ts";
import logoSrc from '../../assets/nav-logo.png';
import {useState} from "react";
import SlidingModal from "../SlidingModal/SlidingModal.tsx";

const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <Nav>
            <Container>
                <Logo src={logoSrc} alt="Company Logo" />
                <HamburgerIcon onClick={() => setIsNavExpanded(!isNavExpanded)}>
                        <BurgerLine />
                        <BurgerLine />
                        <BurgerLine />
                </HamburgerIcon>
                {isNavExpanded
                    ? <SlidingModal onClose={() => setIsNavExpanded(!isNavExpanded)}/>
                    : <NavItems>
                        <NavLink href="#">Объекты</NavLink>
                        <NavLink href="#">О компании</NavLink>
                        <NavLink href="#">Контакты</NavLink>
                    </NavItems>
                }

            </Container>
        </Nav>
    );
};

export default Navigation;
