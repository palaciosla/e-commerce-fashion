import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #FCF5F5;
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
`

const NavPages = () => {
const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "teal" : "",
    borderBottom: isActive ? "1px solid teal" : "",
    fontWeight: isActive ? "bold" : "" 
  })
  return <Nav>
      <NavLink to="/login" style={linkStyle}>Login</NavLink>
      <NavLink to="/register" style={linkStyle}>Register</NavLink>
      <NavLink to="/" activeclassname="active" style={linkStyle}>Home</NavLink>
      <NavLink to="/productlist" style={linkStyle}>ProductList</NavLink>
      <NavLink to="/product" style={linkStyle}>Product</NavLink>
      <NavLink to="/cart" style={linkStyle}>Cart</NavLink>
  </Nav>;
};

export default NavPages;
