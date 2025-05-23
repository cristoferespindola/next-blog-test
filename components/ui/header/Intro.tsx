import { Typography } from '../Typography';
import { THeaderSize } from './types';

export const Intro = ({ size = 'lg', className }: { size?: THeaderSize; className?: string }) => {
  const sizeLevel = size === 'lg' ? 1 : 3;
  const sizeClasses = size === 'lg' ? 'mb-12' : 'mb-4';
  return (
    <Typography.Heading
      level={sizeLevel}
      className={`font-roboto-mono font-black underline ${sizeClasses} ${className}`}
    >
      Mock Blog
    </Typography.Heading>
  );
};
