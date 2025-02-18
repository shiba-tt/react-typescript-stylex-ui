import * as React from 'react';

import stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

import { colors } from '../../../tokens.stylex';

const styles = stylex.create({
  iconRoot: {
    marginRight: 8,
  },
  padding: {
    paddingBlock: '0px',
    paddingInline: '24px',
  },
  paddingWithIcon: {
    paddingBottom: '0px',
    paddingLeft: '16px',
    paddingRight: '24px',
    paddingTop: '0px',
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
  contained: {
    backgroundColor: {
      default: 'inherit',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
    color: colors.primary,
  },
  outlined: {
    backgroundColor: {
      default: 'inherit',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
    color: colors.primary,
  },
  text: {
    backgroundColor: {
      default: 'inherit',
      ':hover': 'blue',
      ':active': 'darkblue',
    },
    color: colors.primary,
  },
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
