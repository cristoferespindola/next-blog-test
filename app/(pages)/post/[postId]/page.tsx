import { authorsInfo } from '@/actions/authors/actions';
import { AuthorInfo } from '@/components/author/Info';
import { Comments } from '@/components/blog/Comments';
import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import { Typography } from '@/components/ui/Typography';
import { getPostById } from '@/models/posts/api';
import { notFound } from 'next/navigation';
const PostPage = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const resolvedParams = await params;

  const post = await getPostById(Number(resolvedParams.postId));
  const author = await authorsInfo(post.data.userId);

  if (!post || post?.error) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 inner-container">
      <Breadcrumb>
        {author && !('error' in author) && (
          <Breadcrumb.Item
            url={`/author/${post.data.userId}`}
            label={author?.name || 'Author'}
            active={false}
          />
        )}
        <Breadcrumb.Separator />
        <Breadcrumb.Item url={`/post/${post.data.id}`} label={post.data.title} active={true} />
      </Breadcrumb>

      <Typography.Heading level={2} className="mt-8 mb-4">
        {post.data.title}
      </Typography.Heading>
      <AuthorInfo authorId={post.data.userId} type="avatar" />
      <div className="flex items-center gap-2 max-w-6xl mx-auto">
        <Typography.Text size="base" color="muted" className="mt-12">
          {post.data.body}
        </Typography.Text>
      </div>
      <div className="mt-20 max-w-2xl mx-auto">
        <Comments postId={post.data.id} />
      </div>
    </div>
  );
};

export default PostPage;
