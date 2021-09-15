import React from 'react';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";

const Button = ({...props}) => {
  return (
      <button {...props} className={styles.btn + ' ' + styles[`${props.class}`]}>{props.title}</button>
  );
};

export default Button;
