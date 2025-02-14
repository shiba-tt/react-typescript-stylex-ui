import * as React from 'react';

import * as stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    appearance: 'none',
    borderWidth: 0,
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

const sizeVariants = stylex.create({
  small: {
    fontSize: '1rem',
    paddingBlock: 4,
    paddingInline: 8,
  },
  medium: {
    fontSize: '1.2rem',
    paddingBlock: 8,
    paddingInline: 16,
  },
  large: {
    fontSize: '1.4rem',
    paddingBlock: 12,
    paddingInline: 24,
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: keyof typeof colorVariants;
  icon?: React.ReactNode;
  isLoading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  size?: keyof typeof sizeVariants;
  style?: StyleXStyles[];
};

const Button = ({
  children,
  color = 'primary',
  icon,
  isLoading,
  size = 'small',
  style,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      {...stylex.props(
        styles.base,
        colorVariants[color],
        sizeVariants[size],
        style,
      )}
    >
      {!isLoading && icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export { Button };
