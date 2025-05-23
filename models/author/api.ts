import { API_URL } from '../constants';
import { IApiSuccessResult, TId } from '../types';
import { APIAuthor } from './types';

export const getAuthors = async (): Promise<IApiSuccessResult<APIAuthor[]>> => {
  const response = await fetch(`${API_URL}/users`, {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        data: [],
        status: 500,
        message: 'Authors not found',
        error: err,
      };
    });

  return {
    success: true,
    data: response,
    status: 200,
    message: 'Authors fetched successfully',
  };
};

export const getAuthorById = async (id: TId): Promise<IApiSuccessResult<APIAuthor>> => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      return {
        success: false,
        data: {},
        status: 500,
        message: 'Author not found',
        error: err,
      };
    });

  return {
    success: true,
    data: response,
    status: 200,
    message: 'Author fetched successfully',
  };
};
