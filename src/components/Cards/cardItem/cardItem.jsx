import React from 'react';
import styles from './styles.module.css';


const CardItem = (props) => {
  return (
    <a href={'#'} className={styles.item}>
      <img className={styles.img} src={props.src} alt=""/>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit lorem,
        sagittis et suscipit vel, posuere viverra velit.
      </p>

    </a>
  );
};

export default CardItem;
