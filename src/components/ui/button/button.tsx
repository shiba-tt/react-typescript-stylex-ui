import * as React from 'react';

import stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

import { buttonStyles, colors } from '../../../tokens.stylex';

const styles = stylex.create({
  disabled: {
    background: buttonStyles.disabledBackground,
    color: buttonStyles.disabled,
    cursor: 'not-allowed',
  },
  disabledLabelText: {
    opacity: 0.38,
  },
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
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'inherit',
    fontSize: 14,
    fontWeight: 500,
    height: 40,
  },
});

const colorVariants = stylex.create({
  error: {
    backgroundColor: colors.error,
    color: colors.onError,
  },
  primary: {
    backgroundColor: colors.primary,
    color: colors.onPrimary,
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.onSecondary,
  },
  tertiary: {
    backgroundColor: colors.tertiary,
    color: colors.onTertiary,
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: keyof typeof colorVariants;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
  style?: StyleXStyles & StyleXStyles[] & string;
};

const Button = ({
  color = 'primary',
  children,
  disabled,
  icon,
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
        disabled && styles.disabled,
        style,
      )}
    >
      {icon && (
        <span
          {...stylex.props(
            styles.iconRoot,
            disabled && styles.disabledLabelText,
          )}
        >
          {icon}
        </span>
      )}
      <span {...stylex.props(disabled && styles.disabledLabelText)}>
        {children}
      </span>
    </button>
  );
};

export { Button };
