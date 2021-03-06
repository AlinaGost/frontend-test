import React from 'react';
import styles from './styles.module.css';

const Modal = ({ visible, setVisible, children }) => {
  const rootClasses = [styles.modal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
