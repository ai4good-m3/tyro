import React from 'react';
import styles from './SidePanel.module.css';

const SidePanel = (props) => (
    <div className={styles.Panel}>
        <h1>Navigation</h1>
        <p>Home</p>
        <p>New Entry</p>
    </div>
);

export default SidePanel;