import React from 'react';
import styles from './styles.module.css';
import {NavLink} from "react-router-dom";


const CardItem = (props) => {
  return (
    <NavLink to={'/account'} className={styles.item}>
      <img className={styles.img} src={props.src} alt=""/>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit lorem,
        sagittis et suscipit vel, posuere viverra velit.
      </p>

    </NavLink>
  );
};

export default CardItem;
