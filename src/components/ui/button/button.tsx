import * as React from 'react';

import stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

import { colors } from '../../../tokens.stylex';

const styles = stylex.create({
  iconRoot: {
    marginRight: 8,
  },
  padding: {
    paddingBlock: 0,
    paddingInline: 24,
  },
  paddingWithIcon: {
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 24,
    paddingTop: 0,
  },
  root: {
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 0,
    display: 'inline-flex',
    fontFamily: 'inherit',
    fontSize: 14,
    fontWeight: 500,
    height: 40,
  },
});

const variants = stylex.create({
  contained: {
    backgroundColor: {
      default: colors.primary,
      ':hover': 'blue',
      ':active': 'darkblue',
    },
    color: colors.onPrimary,
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
  ref?: React.Ref<HTMLButtonElement>;
  style?: StyleXStyles & StyleXStyles[] & string;
  variant?: keyof typeof variants;
};

const Button = ({
  children,
  icon,
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
      {icon && <span {...stylex.props(styles.iconRoot)}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export { Button };
