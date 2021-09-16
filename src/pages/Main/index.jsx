import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';
import Header from "../../components/Header";
import Button from "../../UI/Button";
import Cards from "../../components/Cards";
import Modal from "../../UI/Modal";
import {NavLink} from "react-router-dom";
import AuthForm from "../../components/Auth";

const Main = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Header setModal={setModal} title={'Войти'} />
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.h1}>
            Место для получения медицинской помощи
          </h1>
          <div className={styles.buttons}>
            <Button onClick={() => setModal(true)} addClass={'btn__red'} title={'Войти'}/>
            <NavLink to={'/contacts'}>
              <Button  addClass={'btn__white'} title={'Контакты'} />
            </NavLink>
          </div>
        </div>
        <Cards />
      </div>
      <Modal visible={modal} setVisible={setModal} >
        <AuthForm />
      </Modal>
    </div>
  );
};


export default Main;
