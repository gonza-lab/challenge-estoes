import React from 'react';
import './Form.scss';

export const UiForm = ({ children, ...props }) => {
  return (
    <form className="ui-form" {...props}>
      {children}
    </form>
  );
};
