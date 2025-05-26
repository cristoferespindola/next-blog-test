import { BlogCard } from '@/components/blog/Card';
import { BlogGrid } from '@/components/blog/Grid';
import { Container } from '@/components/ui/Container';
import { Intro } from '@/components/ui/header/Intro';
import { Typography } from '@/components/ui/Typography';
import { getPosts } from '@/models/posts/api';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div id="home">
      <div className="flex items-center justify-start gap-4 bg-gray-900 px-0 py-8">
        <Container>
          <Intro className="text-white mb-0" />
        </Container>
      </div>
      <Container className="inner-container">
        <div className="flex flex-col gap-4 mt-8">
          <Typography.Heading level={2}>Welcome to the Mock Blog</Typography.Heading>
          <Typography.Text size="medium" color="muted">
            Here you can find the latest posts from the blog
          </Typography.Text>
        </div>
        <BlogGrid>
          {posts.data.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </BlogGrid>
      </Container>
    </div>
  );
}
