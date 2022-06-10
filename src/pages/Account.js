import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header.js';
import SidePanel from '../components/SidePanel/SidePanel.js';

const Account = () => {
    return (
      <div>
        <BackgroundContainer>
          <Header />
          <SidePanel /> 
        </BackgroundContainer>    
      </div>
      
    );
  }
  
  export default Account;