import { Typography } from './Typography';

export const Intro = ({
  size = 'large',
  className,
}: {
  size?: 'large' | 'small';
  className?: string;
}) => {
  const sizeLevel = size === 'large' ? 1 : 3;
  const sizeClasses = size === 'large' ? 'mb-12' : 'mb-4';
  return (
    <Typography.Heading
      level={sizeLevel}
      className={`font-roboto-mono font-black underline ${sizeClasses} ${className}`}
    >
      Mock Blog
    </Typography.Heading>
  );
};
