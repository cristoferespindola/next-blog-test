import { API_URL } from '../constants';
import { IApiSuccessResult, TId } from '../types';
import { IApiComment, IApiPost } from './types';

export const getPosts = async (): Promise<IApiSuccessResult<IApiPost[]>> => {
  const response = await fetch(`${API_URL}/posts`)
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        data: [],
        status: 500,
        message: 'Posts not found',
        error: err,
      };
    });

  return {
    success: true,
    data: response,
    status: 200,
    message: 'Posts fetched successfully',
  };
};

export const getPostById = async (id: TId): Promise<IApiSuccessResult<IApiPost>> => {
  const response = await fetch(`${API_URL}/posts/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        data: {},
        status: 500,
        message: 'Post not found',
        error: err,
      };
    });
  return {
    success: true,
    data: response,
    status: 200,
    message: 'Post fetched successfully',
  };
};

export const getPostComments = async (id: TId): Promise<IApiSuccessResult<IApiComment[]>> => {
  const response = await fetch(`${API_URL}/posts/${id}/comments`)
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        data: [],
        status: 500,
        message: 'Post comments not found',
        error: err,
      };
    });
  return {
    success: true,
    status: 200,
    message: 'Post comments fetched successfully',
    data: response,
  };
};
