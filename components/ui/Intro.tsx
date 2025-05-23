import { Typography } from './Typography';

export const Intro = ({ size = 'large' }: { size?: 'large' | 'small' }) => {
  const sizeLevel = size === 'large' ? 1 : 3;
  const sizeClasses = size === 'large' ? 'mb-12' : 'mb-4';
  return (
    <Typography.Heading
      level={sizeLevel}
      className={`font-roboto-mono font-black underline ${sizeClasses}`}
    >
      Mock Blog
    </Typography.Heading>
  );
};
