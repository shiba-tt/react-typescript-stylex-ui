import * as React from 'react';

import * as stylex from '@stylexjs/stylex';
import { type StyleXStyles } from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    // 丸み
    borderRadius: 20,
    borderWidth: 0,
    // フォントサイズ(default 16px)
    fontSize: '1rem',
    // 高さ
    height: 40,
    // ボタン内の余白
    padding: '0px 24px',
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
