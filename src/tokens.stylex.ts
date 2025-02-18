import stylex from '@stylexjs/stylex';

export const buttonStyles = stylex.defineVars({
  disabled: '#1D1B20',
  disabledBackground: 'rgba(29, 27, 32, 0.12)',
});

// https://m3.material.io/styles/color/roles
export const colors = stylex.defineVars({
  error: '#B3261E',
  errorContainer: '#F9DEDC',
  inverseOnSurface: '#F5EFF7',
  inverseSurface: '#322F35',
  onError: '#FFFFFF',
  onErrorContainer: '#8C1D18',
  onPrimary: '#FFFFFF',
  onPrimaryContainer: '#4F378B',
  onSecondary: '#FFFFFF',
  onSecondaryContainer: '#4A4458',
  onSurface: '#1D1B20',
  onSurfaceVariant: '#49454F',
  onTertiary: '#FFFFFF',
  onTertiaryContainer: '#633B48',
  outline: '#79747E',
  outlineVariant: '#CAC4D0',
  primary: '#6750A4',
  primaryContainer: '#EADDFF',
  secondary: '#625B71',
  secondaryContainer: '#E8DEF8',
  surface: '#FEF7FF',
  surfaceContainer: '#F3EDF7',
  surfaceContainerHigh: '#ECE6F0',
  surfaceContainerHighest: '#E6E0E9',
  surfaceContainerLow: '#F7F2FA',
  surfaceContainerLowest: '#FFFFFF',
  surfaceTint: '#6750A4',
  surfaceVariant: '#E7E0EC',
  tertiary: '#7D5260',
  tertiaryContainer: '#FFD8E4',
});
