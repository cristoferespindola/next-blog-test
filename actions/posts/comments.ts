'use server';

import { getPostComments } from '@/models/posts/api';
import { IApiComment } from '@/models/posts/types';
import { TId } from '@/models/types';

export const getComments = async (postId: TId): Promise<IApiComment[]> => {
  const comments = await getPostComments(postId);

  if (!comments.success) {
    return [];
  }

  return comments.data as IApiComment[];
};
