export type AppErrorCode =
  | "validation"
  | "misconfigured"
  | "upstream"
  | "unavailable"
  | "rateLimited";

export type AppError = {
  ok: false;
  code: AppErrorCode;
  message: string;
  retryAfterSeconds?: number;
};

export type AppSuccess<T> = {
  ok: true;
  data: T;
};

export type AppResult<T> = AppSuccess<T> | AppError;

export function appError(
  code: AppErrorCode,
  message: string,
  retryAfterSeconds?: number,
): AppError {
  if (retryAfterSeconds === undefined) {
    return { ok: false, code, message };
  }
  return { ok: false, code, message, retryAfterSeconds };
}
