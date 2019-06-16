import * as bodyParser from "body-parser"
import * as cors from 'cors';
import * as express from "express";
import EventController from "./controllers/event-controller";
import DatabaseService from "./services/database-service";


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const databaseService = new DatabaseService();
const eventController = new EventController(databaseService);

app.use('/careRecipiets', eventController.getAllCareRecipiets);
app.use('/visits', eventController.getVisits);


export default app;
