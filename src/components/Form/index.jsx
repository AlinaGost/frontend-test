import React from 'react';
import styles from './styles.module.css';

const Form = ({ onSubmit,children }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form} >
      {children}
    </form>
  );
};

export default Form;
