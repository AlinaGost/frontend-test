import React from 'react';
import styles from './styles.module.css';
import Header from "../Header/header";
import Button from "../../UI/Button/button";
import Cards from "../Cards/cards";

const Main = () => {
  return (
    <div>
      <Header title={'Контакты'} />

      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.h1}>
            Место для получения медицинской помощи
          </h1>

          <div className={styles.buttons}>
            <Button class={'btn__red'} title={'Войти'}/>
            <Button class={'btn__white'} title={'Контакты'} />
          </div>
        </div>
        <Cards />
      </div>

    </div>
  );
};

export default Main;
