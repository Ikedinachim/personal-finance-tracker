import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Personal Finance Tracker</h1>
      <div className={styles.navLinks}>
        <Link className={styles.link} to="/">Dashboard</Link>
        <Link className={styles.link} to="/add">Add Transaction</Link>
        <Link className={styles.link} to="/goals">Goals</Link>
        <Link className={styles.link} to="/predictions">Predictions</Link>
      </div>
    </nav>
  );
};

export default Navbar;
