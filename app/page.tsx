import { BlogCard } from '@/components/blog/Card';
import { BlogGrid } from '@/components/blog/Grid';
import { Intro } from '@/components/ui/Intro';
import { Typography } from '@/components/ui/Typography';
import { getPosts } from '@/models/posts/api';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto">
      <Intro />
      <div className="flex flex-col gap-4">
        <Typography.Heading level={2}>Posts</Typography.Heading>
        <Typography.Text size="medium" color="muted">
          This is a list of posts
        </Typography.Text>
      </div>
      <BlogGrid>
        {posts.data.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </BlogGrid>
    </div>
  );
}
