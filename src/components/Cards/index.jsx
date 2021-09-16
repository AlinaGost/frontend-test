import React from 'react';
import styles from './styles.module.css';
import CardItem from "./cardItem";
import card1 from './../../img/card1.svg';
import card2 from './../../img/card2.svg';
import card3 from './../../img/card3.svg';

const Cards = () => {
  return (
    <div className={styles.cards}>
      <CardItem title={'Онлайн прием'} src={card1}/>
      <CardItem title={'Экстренный случай'} src={card2}/>
      <CardItem title={'Лечение рака'} src={card3}/>
    </div>
  );
};

export default Cards;
