import React from 'react';
import styles from './styles.module.css';
import Header from "../../components/Header/header";
import Button from "../../UI/Button/button";



const Account = () => {
  return (
    <div>
      <Header title={'Выйти'} />
      <div className="container">
        <h1 className={styles.h1}>Привет, Сергей</h1>
        <div className={styles.buttons}>
          <Button to={'/account'} class={'btn__red--min'} title={'Выйти из аккаунта'}/>
          <Button to={'/account'} class={'btn__white--min'} title={'Перейти в контакты'} />
        </div>
      </div>
    </div>
  );
};

export default Account;
