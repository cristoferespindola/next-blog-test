import { getComments } from '@/actions/posts/comments';
import { TId } from '@/models/types';
import { Typography } from '../ui/Typography';
import { UserInfoAvatar } from '../user/Info';

/**
 * Comments component
 * @param {TId} postId - The post ID
 * @returns {React.ReactNode} The Comments component
 *
 * Dev note:
 * The comments are not paginated, so the comments are not sorted by date.
 *
 * Next steps:
 * - Add pagination
 * - Add sorting by date
 * - Add sorting by name
 * - Add sorting by email
 * - Add sorting by body
 * - Add sorting by id
 * - Add sorting by postId
 * - Add Like button
 * - Add Reply button
 * - Add Reply form
 * - Add Reply input
 * - Add Reply submit button
 * - Add Reply cancel button
 * - Add Reply cancel button
 */
export const Comments = async ({ postId }: { postId: TId }) => {
  const comments = await getComments(postId);

  if (!comments) return null;

  return (
    <div className="flex flex-col gap-4">
      <Typography.Heading level={3} className="font-semibold pb-4">
        {comments.length} Comments
      </Typography.Heading>
      <div className="max-h-[500px] md:max-h-[600px] overflow-y-auto mb-16 border-y border-gray-200">
        <div className="flex flex-col gap-4 my-4">
          {comments.map((comment) => (
            <div
              key={comment?.id}
              className="flex flex-col gap-2 my-4 border-t border-gray-200 pt-8 [&:first-child]:border-t-0"
            >
              <Typography.Heading level={4} className="capitalize">
                {comment?.name}
              </Typography.Heading>
              <Typography.Text size="small" color="muted" className="mb-4">
                {comment?.body}
              </Typography.Text>
              <UserInfoAvatar name={comment?.name} sub={comment?.email} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
