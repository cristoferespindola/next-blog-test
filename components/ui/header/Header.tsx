import { Container } from '../Container';
import { Intro } from './Intro';
import { THeaderSize } from './types';

export const Header = ({ size = 'lg' }: { size?: THeaderSize }) => {
  const sizeClasses = size === 'lg' ? 'py-8' : 'py-4';

  return (
    <div className={`flex items-center justify-start gap-4 bg-gray-900 px-0 ${sizeClasses}`}>
      <Container>
        <Intro className="text-white mb-0" size={size} />
      </Container>
    </div>
  );
};
