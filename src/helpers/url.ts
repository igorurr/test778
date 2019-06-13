import { TUrlDictionary } from "../types/common";

const createUrlOptions = (url: string, options: TUrlDictionary) => {
  return Object.keys(options).length === 0
    ? url
    : `${url}?${Object.keys(options)
        .map(key => key + "=" + options[key])
        .join("&")}`;
};

const defaultVals = {
  mode: "cors",
  redirect: "follow",
};

const postprocessFetch = (response: any) => {
  if (!response.headers.get("Content-Type").includes("json"))
    throw new Error("is not json");

  if (response.status < 200 || response.status > 300) throw response.json();

  return response.json();
};

export const get = (
  url: string,
  options: TUrlDictionary = {},
  headers: TUrlDictionary = {},
) =>
  fetch(createUrlOptions(url, options), {
    ...defaultVals,
    method: "GET",
    headers,
  } as any).then(postprocessFetch);

export const post = (
  url: string,
  options: any = {},
  headers: TUrlDictionary = {},
) =>
  fetch(url, {
    ...defaultVals,
    method: "POST",
    headers,
    options,
  } as any).then(postprocessFetch);

export const path = (
  url: string,
  options: any = {},
  headers: TUrlDictionary = {},
) =>
  fetch(url, {
    ...defaultVals,
    method: "PATH",
    headers,
    options,
  } as any).then(postprocessFetch);
