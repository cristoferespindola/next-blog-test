export type TId = number | string;

export interface APIResponse<T> {
  data: T;
  status: number;
  message: string;
  error?: Error;
}

export interface IApiError extends Error {
  success: false;
  status: number;
  message: string;
}

export type IApiSuccessResult<T = unknown> = APIResponse<T> & { success: true };
export type IApiErrorResult<T = unknown> = APIResponse<T> & { success: false };
