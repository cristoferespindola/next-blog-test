import { TResponsiveObject } from '@/types/theme';
import { twMerge } from 'tailwind-merge';

type TMountResponsiveClasses = string | number | TResponsiveObject<string | number>;

export const mountResponsiveClasses = (
  classes: TMountResponsiveClasses,
  prefix: string,
  map?: Record<string, string>
) => {
  if (typeof classes === 'number' || typeof classes === 'string') {
    return `${prefix}-${map?.[classes] ?? classes}`;
  }
  const responsiveClasses = Object.entries(classes).map(([key, value]) => {
    if (key === 'initial') {
      return `${prefix}-${map?.[value] ?? value}`;
    }
    return `${key}:${prefix}-${map?.[value] ?? value}`;
  });

  return twMerge(...responsiveClasses);
};
