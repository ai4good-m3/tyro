import React from 'react';
import Link from 'next/link';
import styles from './SidePanel.module.css';

const SidePanel = (props) => (
    <div className={styles.Panel}>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/Calendar"><a>Calendar</a></Link></li>
            <li><Link href="/History"><a>History</a></Link></li>
            <li><Link href="/Analysis"><a>Analysis</a></Link></li>
            <li><Link href="/Support"><a>Support</a></Link></li>
        </ul>
    </div>
);

export default SidePanel;