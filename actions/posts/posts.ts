'use server';

import { getPosts } from '@/models/posts/api';
import { TId } from '@/models/types';

export const getPostsAction = async () => {
  return getPosts();
};

export const postByAuthorIdAction = async (authorId: TId) => {
  const posts = await getPosts();

  const filteredPosts = posts.data.filter((post) => post.userId === authorId);

  return filteredPosts;
};
