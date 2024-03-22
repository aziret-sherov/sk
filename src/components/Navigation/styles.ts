import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #004a00; // Dark green background
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  z-index: 1000; // Ensure the navbar is above other content

  @media (max-width: 768px) { // Adjust this pixel value based on your design
    background-color: #004a00; // You might want to change the color for mobile
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between; // Logo on the left, hamburger on the right
  align-items: center;
  padding: 15px 40px;

  @media (max-width: 768px) {
    padding: 15px; // Less padding on smaller screens
  }
`;

export const Logo = styled.img`
  height: 50px; // Adjust the size as necessary for smaller screens
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;

  @media (max-width: 768px) {
    display: none; // Hide the nav items on smaller screens
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 0 10px;
  padding: 20px 10px;

  @media (max-width: 768px) {
    padding: 20px 5px;
    color: black;
  }

  // Add back the hover effect if needed
  &:hover {
    background-color: #006600;
  }
`;

// Hamburger button for mobile
export const HamburgerIcon = styled.div`
  display: none; // Only show this on small screens
  
  @media (max-width: 768px) {
    display: block; // Show the hamburger icon
    cursor: pointer;
  }
`;

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: #FFFFFF;
  margin: 5px;
`;