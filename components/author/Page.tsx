import { Typography } from '../ui/Typography';

export const InfoSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography.Heading level={2} className="text-pretty text-gray-900 sm:text-3xl">
        {title}
      </Typography.Heading>
      {children}
    </div>
  );
};

export const InfoItem = ({
  children,
  title,
  href,
}: {
  children: React.ReactNode;
  title: string;
  href?: string;
}) => {
  const ChildrenWrapper = href ? 'a' : 'span';
  return (
    <Typography.Text strong>
      {title}:{' '}
      <ChildrenWrapper className="text-gray-600 hover-link font-normal">{children}</ChildrenWrapper>
    </Typography.Text>
  );
};
