import { getAuthorsInfo } from '@/actions/authors/actions';
import { postByAuthorIdAction } from '@/actions/posts/posts';
import { BlogCard } from '@/components/blog/Card';
import { BlogGrid } from '@/components/blog/Grid';
import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import { Grid } from '@/components/ui/grid/Grid';
import { Typography } from '@/components/ui/Typography';

const InfoSection = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {children}
    </div>
  );
};

const InfoItem = ({
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
    <p className="text-pretty font-semibold">
      {title}:{' '}
      <ChildrenWrapper className="text-gray-600 hover-link font-normal">{children}</ChildrenWrapper>
    </p>
  );
};

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;

  const author = await getAuthorsInfo(Number(resolvedParams.id));
  const posts = await postByAuthorIdAction(Number(resolvedParams.id));

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <Breadcrumb.Item url="" label={author.name} active={true} />
      </Breadcrumb>

      <Typography.Heading level={2} className="mt-8">
        {author.name}
      </Typography.Heading>
      <Typography.Text size="small" strong className="mb-4">
        Username:{' '}
        <Typography.InlineText color="muted" className="font-normal">
          {author.username}
        </Typography.InlineText>
      </Typography.Text>
      <Grid
        cols={{ initial: 1, md: 2 }}
        gap={{ initial: 'md', md: 'lg' }}
        className="section-border"
      >
        <div className="flex flex-col gap-8">
          <InfoSection title="Info">
            <InfoItem title="City" href={`https://maps.google.com/?q=${author.address}`}>
              {author.address}
            </InfoItem>
          </InfoSection>
          <InfoSection title="Company">
            <InfoItem title="Name">{author.company}</InfoItem>
          </InfoSection>
        </div>
        <div className="flex flex-col gap-4">
          <InfoSection title="Contact">
            <InfoItem title="Email" href={`mailto:${author.email}`}>
              {author.email}
            </InfoItem>
            <InfoItem title="Phone" href={`tel:${author.phone}`}>
              {author.phone}
            </InfoItem>
            <InfoItem title="Website" href={`https://${author.website}`}>
              {author.website}
            </InfoItem>
          </InfoSection>
        </div>
      </Grid>
      <BlogGrid>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} hideAuthor={true} />
        ))}
      </BlogGrid>
    </div>
  );
};

export default PostPage;
