import { getAuthorsInfo } from '@/actions/authors/actions';
import { AuthorInfo } from '@/components/author/Info';
import { Comments } from '@/components/blog/Comments';
import { Breadcrumb } from '@/components/breadcrumb/Breadcrumb';
import { Typography } from '@/components/ui/Typography';
import { getPostById } from '@/models/posts/api';

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;

  const post = await getPostById(Number(resolvedParams.id));
  const author = await getAuthorsInfo(post.data.userId);

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <Breadcrumb.Item
          url={`/author/${post.data.userId}`}
          label={author.name || 'Author'}
          active={false}
        />
        <Breadcrumb.Separator />
        <Breadcrumb.Item url={`/post/${post.data.id}`} label={post.data.title} active={true} />
      </Breadcrumb>

      <Typography.Heading level={2} className="mt-8 mb-4">
        {post.data.title}
      </Typography.Heading>
      <AuthorInfo authorId={post.data.userId} type="avatar" />
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2">
          <Typography.Text size="base" color="muted" className="mt-12 max-w-3xl">
            {post.data.body}
          </Typography.Text>
        </div>
        <div className="mt-20">
          <Comments postId={post.data.id} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
