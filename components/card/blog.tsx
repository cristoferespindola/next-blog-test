import { AuthorInfo } from "../author/info";

interface BlogCardProps {
    post: {
        id: number;
        title: string;
        body: string;
        userId: number;
    };
}

export const BlogCard = ({ post }: BlogCardProps) => {
    if (!post) return null;
    return (
        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between" data-id={post.id}>
        {post.title && <h3 className="mt-3 min-h-12 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 capitalize">{post.title}</h3>}
        {post.body && <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.body}</p>}
        {post.userId && <div className="mt-6 flex items-center gap-4">
            <AuthorInfo authorId={post.userId} />
        </div>}
      </article>
    );
};