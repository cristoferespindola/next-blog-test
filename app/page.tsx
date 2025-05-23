import { BlogCard } from '@/components/blog/Card';
import { BlogGrid } from '@/components/blog/Grid';
import { Typography } from '@/components/ui/Typography';
import { getAuthors } from '@/models/author/api';
import { getPosts } from '@/models/posts/api';

export default async function Home() {
  const [posts] = await Promise.all([getPosts(), getAuthors()]);

  return (
    <div className="container mx-auto">
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
