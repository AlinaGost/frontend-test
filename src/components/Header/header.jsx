import React from 'react';
import styles from './styles.module.css';
import logo from './../../img/logo.svg';
import Button from "../../UI/Button/button";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <NavLink to={'/'}>
          <img className={styles.logo} src={logo} alt=""/>
        </NavLink>
        <div>
          <NavLink className={styles.link} to={'contacts'}>Контакты</NavLink>
          <Button onClick={() => props.setModal(true)} class={'btn__big'} title={props.title}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
