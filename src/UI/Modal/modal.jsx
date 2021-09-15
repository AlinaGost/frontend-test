import React from 'react';
import styles from './styles.module.css';
import Form from "../Form/form";

const Modal = ({visible, setVisible}) => {
  const rootClasses = [styles.modal];
  if(visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <Form setVisible={setVisible} />
      </div>
    </div>
  );
};

export default Modal;
