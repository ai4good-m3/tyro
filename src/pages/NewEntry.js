import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from './../components/Header.js';
import SidePanel from './../components/SidePanel.js';
import BackgroundContainer from '../components/BackgroundContainer';

const NewEntry = () => {
  return (
    
    <div>
      <BackgroundContainer>
        <Header/>
        <SidePanel />
        <p>New Entry</p>    
      </BackgroundContainer>
    </div>
    
  );
}

export default NewEntry;