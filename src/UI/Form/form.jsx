import React from 'react';
import styles from './styles.module.css';
import Button from "../Button/button";


const Form = (props) => {
  return (
    <div className={styles.form}>
      <h3 className={styles.h3} >Login ...</h3>
      <label className={styles.label} htmlFor={'login'}>Login</label>
      <input required className={styles.input} type="text" id={'login'}/>
      <label className={styles.label} htmlFor={'password'}>Password</label>
      <input required id={'password'} className={styles.input} type="text"/>
      <Button onClick={() => props.setVisible(false)} class={'btn__red--min'} title={'Войти'}/>
    </div>
  );
};

export default Form;
