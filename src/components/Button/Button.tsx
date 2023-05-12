import React, { createElement } from 'react';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: string | React.ReactNode;
}

export class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    type: 'button',
  };
  render() {
    const { type, children } = this.props;

    return (
      <button type={type} style={{ width: '100%', height: '100%' }}>
        {children}
      </button>
    );
  }
}
