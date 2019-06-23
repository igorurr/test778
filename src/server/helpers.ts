import { Express } from "express";
import cors from "cors";
import multer from "multer";
import os from "os";

import { IRouteMethods, TRequestPreprocessHandler } from "./types";

const RESPONSE_TIMEOUT = 600;

const corsOptions = {
  origin: "*",
  methods: "POST, GET, PUT, DELETE, OPTIONS, PATCH",
  exposedHeaders: [
    "Cache-Control",
    "Content-Language",
    "Content-Type",
    "Expires",
    "Last-Modified",
    "Pragma",
    "token",
  ],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const upload = multer({ dest: os.tmpdir() });

export const createApiMethod = (method: TRequestPreprocessHandler) => (
  request: any,
  response: any,
) => {
  response.setHeader("Content-Type", "application/json");

  setTimeout(() => {
    try {
      const [status, resp] = method(request, response);
      response.status(status).end(JSON.stringify(resp));
    } catch (error) {
      responseError(request, response, error);
    }
  }, RESPONSE_TIMEOUT);
};

export const responseNotFound = (req: any, resp: any) => {
  console.log(`${req.method} ${req.originalUrl} - not found`);
  resp.status(404).end(JSON.stringify({ error: "not found" }));
};

const responseError = (req: any, resp: any, error: Error) => {
  console.log("internal server error", error);
  resp.status(500).end(JSON.stringify({ error: "internal server error" }));
};

export const serverRoute = (
  app: Express,
  path: string,
  methods: IRouteMethods,
) => {
  if ("get" in methods)
    app.get(path, upload.any(), cors(corsOptions), (req, resp) => {
      console.log(`GET ${path}`);
      methods.get && methods.get(req, resp);
    });

  if ("post" in methods)
    app.post(path, upload.any(), cors(corsOptions), (req, resp) => {
      console.log(`POST ${path}`);
      methods.post && methods.post(req, resp);
    });

  if ("delete" in methods)
    app.delete(path, upload.any(), cors(corsOptions), (req, resp) => {
      console.log(`DELETE ${path}`);
      methods.delete && methods.delete(req, resp);
    });

  if ("patch" in methods)
    app.patch(path, upload.any(), cors(corsOptions), (req, resp) => {
      console.log(`PATCH ${path}`);
      methods.patch && methods.patch(req, resp);
    });

  if ("put" in methods)
    app.put(path, upload.any(), cors(corsOptions), (req, resp) => {
      console.log(`PUT ${path}`);
      methods.put && methods.put(req, resp);
    });

  app.options(path, cors(corsOptions));
};
