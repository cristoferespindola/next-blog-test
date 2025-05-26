import { authorsInfo } from '@/actions/authors/actions';
import { InfoItem, InfoSection } from '@/components/author/Page';
import { AuthorPosts } from '@/components/author/Posts';
import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import { Grid } from '@/components/ui/grid/Grid';
import { Typography } from '@/components/ui/Typography';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

const PostPage = async ({ params }: { params: Promise<{ authorId: string }> }) => {
  const resolvedParams = await params;

  const author = await authorsInfo(Number(resolvedParams.authorId));

  if (!author || 'error' in author) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 inner-container">
      <Breadcrumb>
        <Breadcrumb.Item url="" label={author?.name || 'Author'} active={true} />
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
      <Suspense>
        <AuthorPosts id={Number(resolvedParams.authorId)} />
      </Suspense>
    </div>
  );
};

export default PostPage;
