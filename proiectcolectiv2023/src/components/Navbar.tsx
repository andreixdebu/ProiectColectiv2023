import React from 'react';
import favicon from '../favicon.png';
import account from '../account.png';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>

        <div className={styles.leftContent}>
            <img src={favicon} alt="Favicon" className={styles.navbarLogo} style={{ width: '32px', height: '32px' }} />
            <h1 className={styles.navbarTitle} >FoodBytes</h1>
        </div>

        <div className={styles.navbarLinks}>

          <div className={styles.navbarButtons}>
              <a href="/">Home</a>
          </div>

          <div className={styles.navbarButtons}>
              <a href="/restaurants">Restaurants</a>
          </div>

          <div className={styles.navbarButtons}>
              <a href="/cart">Cart</a>
          </div>

        </div>
        
        <div className={styles.navbarAccount} >
          <img src={account} alt ="Account" style={{ width: '32px', height: '32px' }}/>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;