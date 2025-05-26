import { API_TAGS, API_URL, REVALIDATE_TIME } from '../constants';
import { IApiSuccessResult, TId } from '../types';
import { IApiComment, IApiPost } from './types';

export const getPosts = async (): Promise<IApiSuccessResult<IApiPost[]>> => {
  const response = await fetch(`${API_URL}/posts`, {
    next: {
      revalidate: REVALIDATE_TIME,
      tags: [API_TAGS.posts],
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        status: 500,
        message: 'Posts not found',
        data: [],
        error: err,
      };
    });

  if (response.error) {
    return response;
  }

  return {
    success: true,
    data: response,
    status: 200,
    message: 'Posts fetched successfully',
  };
};

export const getPostById = async (id: TId): Promise<IApiSuccessResult<IApiPost>> => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    next: {
      revalidate: REVALIDATE_TIME,
      tags: [API_TAGS.posts],
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        status: 500,
        message: 'Post not found',
        data: {},
        error: err,
      };
    });

  if (response.error) {
    return response;
  }

  return {
    success: true,
    data: response,
    status: 200,
    message: 'Post fetched successfully',
  };
};

export const getPostComments = async (id: TId): Promise<IApiSuccessResult<IApiComment[]>> => {
  const response = await fetch(`${API_URL}/posts/${id}/comments`, {
    next: {
      revalidate: REVALIDATE_TIME,
      tags: [API_TAGS.posts],
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        status: 500,
        message: 'Post comments not found',
        data: [],
        error: err,
      };
    });

  if (response.error) {
    return response;
  }

  return {
    success: true,
    status: 200,
    message: 'Post comments fetched successfully',
    data: response,
  };
};
