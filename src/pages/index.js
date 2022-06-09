import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header.js';
import SidePanel from '../components/SidePanel/SidePanel.js';
import BackgroundContainer from '../components/BackgroundContainer/BackgroundContainer';

const Home = () => {
  return (
    <div>
      <BackgroundContainer>
        <Header />
      </BackgroundContainer>    
    </div>
    
  );
}

export default Home;