export const API_URL = 'https://jsonplaceholder.typicode.com';

export const REVALIDATE_TIME =
  process.env.NODE_ENV === 'production'
    ? parseInt(process.env.NEXT_PUBLIC_REVALIDATE_TIME || '3600')
    : 0;

export const API_TAGS = {
  authors: 'authors',
  posts: 'posts',
};
