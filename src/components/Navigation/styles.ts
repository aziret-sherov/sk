import styled from 'styled-components';

export const NavBar = styled.nav`
  background-color: #004400; /* Replace with your actual color */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Logo = styled.div`
  
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #aaaaaa;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    /* Add your mobile menu icon styles here */
  }
`;
