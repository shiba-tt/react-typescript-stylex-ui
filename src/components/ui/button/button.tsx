import * as React from 'react';

import stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  iconRoot: {
    marginRight: 8,
  },
  padding: {
    padding: '0px 24px',
  },
  paddingWithIcon: {
    padding: '0px 24px 0px 16px',
  },
  root: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0,
    display: 'inline-flex',
    fontSize: '1rem',
    height: 40,
  },
});

const colorVariants = stylex.create({
  primary: {
    backgroundColor: {
      default: '#6750A4',
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
  style?: StyleXStyles & StyleXStyles[] & string;
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
      {...stylex.props(
        styles.root,
        icon ? styles.paddingWithIcon : styles.padding,
        colorVariants[color],
        style,
      )}
    >
      {!isLoading && icon && (
        <span {...stylex.props(styles.iconRoot)}>{icon}</span>
      )}
      <span>{children}</span>
    </button>
  );
};

export { Button };
