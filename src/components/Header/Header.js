import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = (props) => (
    <div className={styles.Header}>
        <div className={styles.Header_container}>
            <div>
                <Link href="/">
                    <a><img src={'/logo.png'} className={styles.Header_logo} alt="logo" /></a>
                </Link>
            </div>
            <div className={styles.right}>
                <Link href="/Account"><a><i class="fa-solid fa-ellipsis-vertical"></i></a></Link>
            </div>
            
        </div>
    </div>
);

export default Header;