export type IError = {} | null;

interface IRequestLoaderData {
  status: "waiting" | "pending" | "error" | "success";
  error?: IError;
}

export type IRequestLoader = IRequestLoaderData;

export interface IDictionary<T> {
  [key: string]: T;
}

export type TUrlDictionary = IDictionary<string | number | boolean>;
