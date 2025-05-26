import { Container } from '@/components/ui/Container';
import { Header } from '@/components/ui/header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="inner-pages"
      className="flex flex-col gap-4"
      style={{ '--header-height': '64px' } as React.CSSProperties}
    >
      <Header size="sm" />
      <Container>
        <div className="flex flex-col gap-4">{children}</div>
      </Container>
    </div>
  );
}
