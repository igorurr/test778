export type IError = {} | null;

interface IRequestLoaderData {
    success: boolean,
    error: IError
}

export type IRequestLoader = IRequestLoaderData | null;

export type TDictionary<T> = { [key: string]: T };

export type TUrlDictionary = TDictionary<string | number | boolean>;