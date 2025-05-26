import { twMerge } from 'tailwind-merge';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={twMerge('container mx-auto px-4 2xl:px-4', className)}>{children}</div>;
};
