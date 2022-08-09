import React from 'react';
import Styles from './Button.module.scss';

const Button = ( { children, onClickHandle, keys, index } ) => {

  const onClicked = () => {
    onClickHandle(index);
  }

  return (
    <li 
      onClick={onClicked} 
      className={Styles.element} 
      key={keys} 
      index={index}
    >
      {children}
    </li>
  )
}

export default Button;
