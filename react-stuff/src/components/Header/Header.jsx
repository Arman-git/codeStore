import React from "react";
import { Link } from 'react-router-dom'
 
import styles from "../../styles/Header.module.css";

import { ROUTES } from "../../utils/routes";

import LOGO from '../../images/logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff" />
        </Link>
      </div>
    </div>
  );
};

export default Header;