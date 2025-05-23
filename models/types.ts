export interface APIResponse<T> {
  data: T;
  status: number;
  message: string;
  error?: Error;
}

export type IApiSuccessResult<T = unknown> = APIResponse<T> & { success: true };
export type IApiErrorResult<T = unknown> = APIResponse<T> & { success: false };


