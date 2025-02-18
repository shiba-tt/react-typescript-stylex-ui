import * as React from 'react';

import stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  color: {
    backgroundColor: {
      default: '#6750A4',
      ':hover': 'darkblue',
    },
    color: 'white',
  },
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

const variants = stylex.create({
  contained: {},
  outlined: {},
  text: {},
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  isLoading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  style?: StyleXStyles & StyleXStyles[] & string;
  variant?: keyof typeof variants;
};

const Button = ({
  children,
  icon,
  isLoading,
  style,
  variant = 'text',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      {...stylex.props(
        styles.root,
        icon ? styles.paddingWithIcon : styles.padding,
        styles.color,
        variants[variant],
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
