import React from 'react';
import Styles from './Button.module.scss';

const Button = ( { children, onClickHandle, index } ) => {

  const onClicked = () => {
    onClickHandle(index);
  }

  return (
    <li 
      onClick={onClicked} 
      className={Styles.element}  
      index={index}
    >
      {children}
    </li>
  )
}

export default Button;
