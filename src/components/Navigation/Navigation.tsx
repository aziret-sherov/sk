import {Logo, MobileMenuIcon, NavBar, NavItem, NavItems, NavLink} from "./styles.ts";

const Navigation = () => {
    return (
        <NavBar>
            <Logo>LOGO</Logo>
            <NavItems>
                <NavItem>
                    <NavLink href="/objects">ОБЪЕКТЫ</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">О КОМПАНИИ</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contacts">КОНТАКТЫ</NavLink>
                </NavItem>
            </NavItems>
            <MobileMenuIcon>Menu</MobileMenuIcon>
        </NavBar>
    );
};

export default Navigation;