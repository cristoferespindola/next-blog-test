import { TId } from '../types';

export interface IApiPost {
  id: TId;
  title: string;
  body: string;
  userId: TId;
}

export interface IApiComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
