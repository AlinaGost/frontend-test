import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import styles from './styles.module.css';
import Header from "../../components/Header/header";
import Button from "../../UI/Button/button";
import {NavLink} from "react-router-dom";

const Account = (props) => {
  const [user, setState] = useState('');
  const history = useHistory();

  useEffect(() => {
   const jsonUser = localStorage.getItem('user');

   if (!jsonUser) {
     history.push('/')
   }

   setState(JSON.parse(jsonUser));
  }, [])
  return (
    <div >
      <Header title={'Выйти'} />
      <div className="container">
        <h1 className={styles.h1}> Привет, {user.name}!</h1>
        <div className={styles.buttons}>
          <NavLink to={'/'}>
            <Button  class={'btn__red--min'} title={'Выйти из аккаунта'}/>
          </NavLink>
          <NavLink to={'/contacts'}>
            <Button  class={'btn__white--min'} title={'Перейти в контакты'} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Account;
