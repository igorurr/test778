export type IError = {} | null;

interface IRequestLoaderData {
  status: "waiting" | "pending" | "error" | "success";
  error?: IError;
}

export type IRequestLoader = IRequestLoaderData;

export type TDictionary<T> = { [key: string]: T };

export type TUrlDictionary = TDictionary<string | number | boolean>;
