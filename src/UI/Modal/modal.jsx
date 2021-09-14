import React from 'react';
import styles from './styles.module.css';
import Button from "../../UI/Button/button";

const Modal = () => {
  return (
    <div className={styles.auth}>
      <input type="text"/>
      <input type="text"/>
      <Button to={'/account'} class={'btn__red'} title={'Войти'} />
    </div>
  );
};

export default Modal;
