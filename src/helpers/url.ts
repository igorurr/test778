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

const preprocessFormData = (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach((key: string) =>
    formData.append(key, (data as any)[key]),
  );
  return formData;
};

const postprocessFetch = (response: any) => {
  if (!response.headers.get("Content-Type").includes("json"))
    throw new Error("is not json");

  return response.json().then((data: {}) => {
    if (response.status < 200 || response.status > 300) throw data;
    return data;
  });
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
  body: any = {},
  headers: TUrlDictionary = {},
) =>
  fetch(url, {
    ...defaultVals,
    method: "POST",
    headers,
    body: preprocessFormData(body),
  } as any).then(postprocessFetch);

export const patch = (
  url: string,
  body: any = {},
  headers: TUrlDictionary = {},
) =>
  fetch(url, {
    ...defaultVals,
    method: "PATCH",
    headers,
    body: preprocessFormData(body),
  } as any).then(postprocessFetch);
