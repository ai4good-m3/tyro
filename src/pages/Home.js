import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './../components/Header.js';
import SidePanel from './../components/SidePanel.js';
import BackgroundContainer from '../components/BackgroundContainer';

const Home = () => {
  return (
    <div>
      <BackgroundContainer>
        <Header />
        <SidePanel />  
      </BackgroundContainer>    
    </div>
    
  );
}

export default Home;