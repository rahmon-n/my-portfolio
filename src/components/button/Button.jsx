import React from 'react';
import './button.css';

const Button = ({ tagName, className = '', ...otherProps }) => {
  const Tag = tagName || 'button';

  return React.createElement(Tag, {
    className: `button ${className}`,
    ...otherProps
  });
};

export default Button;
