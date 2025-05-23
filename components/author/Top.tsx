import { getAuthors } from '@/models/author/api';
import { getPosts } from '@/models/posts/api';
import { Typography } from '../ui/Typography';

const AuthorTopItem = ({ author }: { author: { name?: string; count: number } }) => {
  return (
    <div className="flex flex-col gap-2">
      {author.name || 'Unknown'}
      <Typography.Text size="small" color="muted">
        {author.count} posts
      </Typography.Text>
    </div>
  );
};

const AuthorTopList = ({ authors }: { authors: { name?: string; count: number }[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography.Heading level={3}>Top Authors</Typography.Heading>
      {authors.map((author) => (
        <AuthorTopItem key={author.name} author={author} />
      ))}
    </div>
  );
};

export const AuthorTop = async () => {
  const posts = await getPosts();
  const authors = await getAuthors();

  const author = posts.data.reduce(
    (acc, post) => {
      if (post.userId) {
        acc[post.userId] = (acc[post.userId] || 0) + 1;
      }
      return acc;
    },
    {} as Record<string, number>
  );

  const topAuthors = Object.entries(author)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  const topAuthorsWithName = topAuthors.map(([id, count]) => {
    const author = authors.data.find((author) => author.id === parseInt(id));

    return {
      name: author?.name,
      count,
    };
  });

  return <AuthorTopList authors={topAuthorsWithName} />;
};
