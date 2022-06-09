import React from 'react';
import styles from './BackgroundContainer.module.css';

const BackgroundContainer = (props) => (
    <div className={styles.BackgroundContainer}>
        {props.children}
    </div>
);

export default BackgroundContainer;