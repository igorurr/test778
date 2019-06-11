import db from "./db";
import express from "express";

const app = express();

const version = '1';
const apiBase = `/api/v${version}`;

app.post(`${apiBase}/user/session`, function(req, res) {
    // sReq.query.email.;
    res.sendStatus(200);
});
