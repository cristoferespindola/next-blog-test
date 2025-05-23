import { TResponsiveObject } from '@/types/theme';
import { mountResponsiveClasses } from '@/utils/classes';
import { twMerge } from 'tailwind-merge';

type TCol = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type TGap = 'sm' | 'md' | 'lg';

interface IGridGap extends TResponsiveObject<TGap> {
  initial?: TGap;
}

interface IGridCol extends TResponsiveObject<TCol> {
  initial?: TCol;
}

type IColsProps = TCol | IGridCol;
type IGapProps = TGap | IGridGap;

type TGridProps = {
  children: React.ReactNode;
  cols: IColsProps;
  gap?: IGapProps;
  className?: string;
};

const gapClasses = {
  sm: '4',
  md: '6',
  lg: '8',
};

const mountColClasses = (cols: IColsProps) => {
  if (typeof cols === 'number') {
    return `grid-cols-${cols}`;
  }

  return mountResponsiveClasses(cols, 'grid-cols');
};

const mountGapClasses = (gap: IGapProps) => {
  if (typeof gap === 'string') {
    return `gap-${gapClasses[gap]}`;
  }

  return mountResponsiveClasses(gap, 'gap', gapClasses);
};

export const Grid = ({ children, cols, gap = 'md', className }: TGridProps) => {
  return (
    <div className={twMerge(`grid`, mountGapClasses(gap), mountColClasses(cols), className)}>
      {children}
    </div>
  );
};
