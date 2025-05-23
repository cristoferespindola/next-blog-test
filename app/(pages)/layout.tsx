import { Container } from '@/components/ui/Container';
import { Header } from '@/components/ui/header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <Header size="sm" />
      <Container>
        <div className="flex flex-col gap-4">{children}</div>
      </Container>
    </div>
  );
}
