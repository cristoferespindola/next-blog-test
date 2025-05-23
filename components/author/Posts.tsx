import { BlogCard } from '@/components/blog/Card';
import { BlogGrid } from '@/components/blog/Grid';
import { getAuthorPosts } from '@/models/author/api';
import { TId } from '@/models/types';

export const AuthorPosts = async ({ id }: { id: TId }) => {
  const posts = await getAuthorPosts(id);

  return (
    <BlogGrid>
      {posts.data.map((post) => (
        <BlogCard key={post.id} post={post} hideAuthor={true} />
      ))}
    </BlogGrid>
  );
};
