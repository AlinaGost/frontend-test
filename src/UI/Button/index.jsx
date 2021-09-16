import React from 'react';
import styles from './styles.module.css';

const Button = ({ ...props }) => {
  return (
      <button {...props} className={styles.btn + ' ' + styles[`${props.addClass}`]}>{props.title}</button>
  );
};

export default Button;
