import { TId } from '@/models/types';
import Link from 'next/link';
import { AuthorInfo } from '../author/Info';
import { Typography } from '../ui/Typography';

interface BlogCardProps {
  post: {
    id: TId;
    title: string;
    body: string;
    userId: TId;
  };
  hideAuthor?: boolean;
}

export const BlogCard = ({ post, hideAuthor }: BlogCardProps) => {
  if (!post) return null;
  return (
    <article
      key={post.id}
      className="flex max-w-xl flex-col items-start justify-between rounded-lg border border-gray-200 p-4 hover:translate-y-[-5px] hover:shadow-lg relative transition-all duration-300"
      data-id={post.id}
    >
      {post.title && (
        <Link href={`/post/${post.id}`} className="hover-link">
          <Typography.Heading level={4} className="mt-3 min-h-12 capitalize ">
            {post.title}
          </Typography.Heading>
        </Link>
      )}
      {post.body && (
        <Typography.Text size="small" color="muted" className="mt-5 line-clamp-3">
          {post.body}
        </Typography.Text>
      )}
      {!hideAuthor && post.userId && (
        <div className="mt-6 flex items-center gap-4">
          <AuthorInfo authorId={post.userId} type="avatar" />
        </div>
      )}
    </article>
  );
};
