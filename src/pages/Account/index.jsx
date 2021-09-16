import React, {useEffect, useState} from 'react';
import { useHistory, NavLink } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../UI/Button";
import styles from './styles.module.css';

const Account = () => {
  const [user, setUser] = useState('');
  const history = useHistory();

  useEffect(() => {
   const jsonUser = localStorage.getItem('user');

   if (!jsonUser) {
     history.push('/')
   }

   setUser(JSON.parse(jsonUser));
  }, [])
  return (
    <div >
      <Header title={'Выйти'} />
      <div className="container">
        <h1 className={styles.h1}> Привет, {user.name}!</h1>
        <div className={styles.buttons}>
          <NavLink to={'/'}>
            <Button  addClass={'btn__red--min'} title={'Выйти из аккаунта'}/>
          </NavLink>
          <NavLink to={'/contacts'}>
            <Button  addClass={'btn__white--min'} title={'Перейти в контакты'} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Account;
