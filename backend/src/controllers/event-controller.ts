import { Request, Response } from 'express';
import DatabaseService from '../services/database-service';

class EventController {
    private static dbService: DatabaseService;

    constructor(dbService: DatabaseService) {
        EventController.dbService = dbService;
    }

    public getAllCareRecipiets(_: Request, res: Response) {
        EventController.dbService.getAllCareRecipiets().then(result => {
            const flatResult = new Array();
            result.forEach((element: { care_recipient_id: any; }) => {
                flatResult.push(element.care_recipient_id);
            });
            res.json(flatResult);
        });
    }
}

export default EventController;