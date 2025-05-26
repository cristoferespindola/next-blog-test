'use server';

import { getAuthors } from '@/models/author/api';
import { TId } from '@/models/types';
import { TAuthor } from './types';

export const getAuthorss = async () => {
  const authors = await getAuthors();

  if (!authors.success) {
    return null;
  }

  return authors.data;
};

export const authorsInfo = async (id: TId): Promise<TAuthor | { error: boolean }> => {
  const authors = (await getAuthors()).data;

  const author = authors.find((author) => author.id === id);

  if (!author) {
    return {
      error: true,
    };
  }

  return {
    name: author?.name || '',
    username: author?.username || '',
    id: author?.id || 0,
    email: author?.email || '',
    phone: author?.phone || '',
    website: author?.website || '',
    company: author?.company.name || '',
    address: author?.address.city || '',
  };
};
