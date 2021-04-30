import React from 'react';
import './Button.scss';

export const UiButton = ({ children, ...props }) => {
  return(
    <button className="ui-button" {...props}>{children}</button>
  );
};
