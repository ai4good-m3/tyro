import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import SidePanel from '../components/SidePanel/SidePanel';
import BackgroundContainer from '../components/BackgroundContainer/BackgroundContainer';
import Calendar from 'react-calendar';

const NewEntry = () => {
  return (
    
    <div>
      <BackgroundContainer>
        <Header/>
        <SidePanel />
        <Calendar />
      </BackgroundContainer>
    </div>
    
  );
}

export default NewEntry;