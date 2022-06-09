import React from 'react';
import './BackgroundContainer.css';

const BackgroundContainer = (props) => (
    <div className="BackgroundContainer">
        {props.children}
    </div>
);

export default BackgroundContainer;