import Link from 'next/link';
import { Container } from './Container';
import { Intro } from './header/Intro';
import { Typography } from './Typography';

export const Footer = () => {
  return (
    <div className="bg-gray-900 p-8 min-h-48 w-full">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Intro size="sm" className="text-white" />
            </Link>
            <Typography.Text className="text-white">Footer</Typography.Text>
          </div>
          <div className="flex flex-col gap-4 items-end justify-end">
            <Typography.Text className="text-white">
              Developed by Cristofer Espindola
            </Typography.Text>
          </div>
        </div>
      </Container>
    </div>
  );
};
