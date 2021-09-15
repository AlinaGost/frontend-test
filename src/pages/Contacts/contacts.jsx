import React from 'react';
import styles from './styles.module.css';
import Header from "../../components/Header/header";


const Contacts = () => {
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
