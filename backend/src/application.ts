import * as bodyParser from "body-parser"
import * as express from "express";
import { pingController } from "./controllers/ping";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(pingController);

export default app;
