type TRequestHandler = (request: any, response: any) => void;

export type TRequestPreprocessHandler = (
  request: any,
  response: any,
) => [number, any];

export interface IRouteMethods {
  get?: TRequestHandler;
  delete?: TRequestHandler;
  path?: TRequestHandler;
  post?: TRequestHandler;
  put?: TRequestHandler;
}
