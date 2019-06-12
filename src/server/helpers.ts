import { Express } from "express";
import cors from "cors";

import { IRouteMethods, TRequestPreprocessHandler } from "./types";

export const createApiMethod = (method: TRequestPreprocessHandler) => (
  request: any,
  response: any,
) => {
  response.setHeader("Content-Type", "application/json");

  try {
    const [status, resp] = method(request, response);
    response.status(status).end(JSON.stringify(resp));
  } catch (error) {
    responseError(request, response, error);
  }
};

const responseNotFound = (req: any, resp: any) => {
  console.log("not found");
  resp.status(404).end(JSON.stringify({ error: "not found" }));
};

const responseError = (req: any, resp: any, error: Error) => {
  console.log("internal server error", error);
  resp.status(500).end(JSON.stringify({ error: "internal server error" }));
};

var corsOptions = {
  origin: "*",
  methods: "POST, GET, PUT, DELETE, OPTIONS, PATH",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export const serverRoute = (
  app: Express,
  path: string,
  methods: IRouteMethods,
) => {
  app.all(path, cors(corsOptions), (req, resp) => {
    console.log(`${req.method} ${path}`);

    switch (req.method) {
      case "GET":
        methods.get ? methods.get(req, resp) : responseNotFound(req, resp);
        break;

      case "DELETE":
        methods.delete
          ? methods.delete(req, resp)
          : responseNotFound(req, resp);
        break;

      case "PATH":
        methods.path ? methods.path(req, resp) : responseNotFound(req, resp);
        break;

      case "POST":
        methods.post ? methods.post(req, resp) : responseNotFound(req, resp);
        break;

      case "PUT":
        methods.put ? methods.put(req, resp) : responseNotFound(req, resp);
        break;

      default:
        responseNotFound(req, resp);
    }
  });
};
