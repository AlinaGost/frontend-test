import React from 'react';
import styles from './styles.module.css';
import logo from './../../img/logo.svg';
import Button from "../../UI/Button";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <NavLink to={'/'}>
          <img className={styles.logo} src={logo} alt=""/>
        </NavLink>
        <div>
          <NavLink className={styles.link} to={'contacts'}>Контакты</NavLink>
          {props.title === 'Войти' ?
            <Button onClick={() => props.setModal(true)} addClass={'btn__big'} title={props.title} /> :
            <NavLink to={'/'} >
              <Button  addClass={'btn__big'} title={props.title} />
            </NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
