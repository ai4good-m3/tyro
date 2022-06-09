import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import SidePanel from '../components/SidePanel/SidePanel';
import BackgroundContainer from '../components/BackgroundContainer/BackgroundContainer';

const NewEntry = () => {
  return (
    
    <div>
      <BackgroundContainer>
        <Header/>
        <p>New Entry</p>    
      </BackgroundContainer>
    </div>
    
  );
}

export default NewEntry;