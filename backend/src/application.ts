import * as bodyParser from "body-parser"
import * as express from "express";
import EventController from "./controllers/event-controller";
import { pingController } from "./controllers/ping";
import DatabaseService from "./services/database-service";


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const databaseService = new DatabaseService();
const eventController = new EventController(databaseService);

app.use('/careRecipiets', eventController.getAllCareRecipiets);

app.use(pingController);

export default app;
