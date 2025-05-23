import { BlogCard } from '@/components/card/blog';
import { getAuthors } from '@/models/author/api';
import { getPosts } from '@/models/posts/api';

export default async function Home() {
  const [posts] = await Promise.all([getPosts(), getAuthors()]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Posts
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">This is a list of posts</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.data.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
