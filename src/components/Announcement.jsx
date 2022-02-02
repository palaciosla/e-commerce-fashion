import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 35px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 0;
`

const Announcement = () => {
  return <Container>
      <h3>Super Deal! Free Shipping on Orders over $50</h3>
  </Container>;
};

export default Announcement;
