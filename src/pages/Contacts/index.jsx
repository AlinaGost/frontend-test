import React, {useEffect} from 'react';
import styles from './styles.module.css';
import Header from "../../components/Header";
import {useHistory} from "react-router-dom";

const Contacts = () => {
  const history = useHistory();

  useEffect(() => {
    const jsonUser = localStorage.getItem('user');

    if (!jsonUser) {
      history.push('/')
    }
  }, [])

  return (
    <div>
     <Header title={'Выйти'} />
     <div className="container">
       <h1 className={styles.h1}>Контакты</h1>
     </div>
    </div>
  );
};

export default Contacts;
