import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container className="inner-container">
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <Typography.Heading level={1}>Not Found</Typography.Heading>
        <Typography.Text size="base" strong>
          The page you are looking for does not exist.
        </Typography.Text>
        <Link href="/">Go to home</Link>
      </div>
    </Container>
  );
}
