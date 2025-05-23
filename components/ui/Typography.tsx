import { twMerge } from 'tailwind-merge';

import type { JSX } from 'react';

type THeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type THeadingProps = {
  children: React.ReactNode;
  level: THeadingLevel;
  className?: string;
  style?: React.CSSProperties;
};

const headingBaseClasses = 'text-pretty text-gray-900 sm:text-6xl';

const headingClasses = {
  1: 'text-5xl tracking-tight sm:text-6xl',
  2: 'text-4xl font-semibold tracking-tight sm:text-5xl',
  3: 'text-xl font-semibold tracking-tight sm:text-2xl',
  4: 'text-lg font-semibold tracking-tight sm:text-xl',
  5: 'text-base font-semibold tracking-tight sm:text-lg',
  6: 'text-sm font-semibold tracking-tight sm:text-base',
};

const Heading = ({ children, level = 1, className, style }: THeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={twMerge(headingBaseClasses, headingClasses[level], className)} style={style}>
      {children}
    </Tag>
  );
};

type TTextProps = {
  children: React.ReactNode;
  strong?: boolean;
  className?: string;
  size?: 'base' | 'medium' | 'small';
  color?: 'text' | 'muted';
};

const sizeClasses = {
  base: 'text-base',
  medium: 'text-lg',
  small: 'text-sm',
};

const colorClasses = {
  text: 'text-text',
  muted: 'text-text-muted',
};

const Text = ({ children, strong, className, size = 'base', color = 'text' }: TTextProps) => {
  return (
    <p
      className={twMerge(
        'text-text',
        strong && 'font-semibold',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    >
      {children}
    </p>
  );
};

const InlineText = ({ children, strong, className, size = 'base', color = 'text' }: TTextProps) => {
  return (
    <span
      className={twMerge(
        'text-text',
        strong && 'font-semibold',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    >
      {children}
    </span>
  );
};

export const Typography = {
  Heading,
  Text,
  InlineText,
};
