import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/main/Header';
import Search from '../../components/main/Search';
import Location from '../../components/main/Location';
import Experience from '../../components/main/Experience';
import Footer from '../../components/main/Footer';

const Inner = styled.div`
  .inner {
    
    margin: 0 auto;
  }
`;
const Global = createGlobalStyle`
  body {
    background-color: black;
  }
`;


const Home = () => {
  return (
    <>
      <Global />
      <Inner>
        <div className="inner">
          <Header />
        </div>
      </Inner>
    </>
  );
}

export default Home;