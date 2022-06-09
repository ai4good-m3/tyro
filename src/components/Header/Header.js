import React from 'react';
import styles from './Header.module.css';

const Header = (props) => (
    <div className={styles.Header}>
        <div className={styles.Header_container}>
            
            <div>
                <img src={'/logo.png'} className={styles.Header_logo} alt="logo" />
            </div>
            {/*<div className="right">
                <Link to="/account"><i class="fas fa-solid fa-ellipsis-vertical"></i></Link>
            </div> */}
            
        </div>
    </div>
);

export default Header;