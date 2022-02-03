import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from "../responsive";

const Nav = styled.nav`
    background-color: #f8e7e7;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
${mobile({width: "90%", padding: "10px 0"})}
`

const NavPages = () => {
const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "teal" : "gray",
    borderBottom: isActive ? "1px solid teal" : "",
    fontWeight: isActive ? "bold" : "500" 
  })
  return <Nav>
      <Wrapper>
      <NavLink to="/login" style={linkStyle}>Login</NavLink>
      <NavLink to="/register" style={linkStyle}>Register</NavLink>
      <NavLink to="/" activeclassname="active" style={linkStyle}>Home</NavLink>
      <NavLink to="/productlist" style={linkStyle}>ProductList</NavLink>
      <NavLink to="/product" style={linkStyle}>Product</NavLink>
      <NavLink to="/cart" style={linkStyle}>Cart</NavLink>
      </Wrapper>
  </Nav>;
};

export default NavPages;
