import * as React from 'react';

import * as stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    borderRadius: '40px',
    fontSize: 14,
    height: 40,
    padding: '6px 16px',
  },
});

const colorVariants = stylex.create({
  primary: {
    backgroundColor: {
      default: 'blue',
      ':hover': 'darkblue',
    },
    color: 'white',
  },
  secondary: {
    backgroundColor: {
      default: 'gray',
      ':hover': 'darkgray',
    },
    color: 'white',
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: keyof typeof colorVariants;
  icon?: React.ReactNode;
  isLoading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  style?: StyleXStyles[];
};

const Button = ({
  children,
  color = 'primary',
  icon,
  isLoading,
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      {...stylex.props(styles.root, colorVariants[color], style)}
    >
      {!isLoading && icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export { Button };
