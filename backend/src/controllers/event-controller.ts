import { Request, Response } from 'express';
import { Caregiver } from '../models/Caregiver';
import { Visit } from '../models/Visit';
import DatabaseService from '../services/database-service';

class EventController {
    private static dbService: DatabaseService;

    private static formatResult(result: any) {
        const visits = Array();
        result.forEach((element: any) => {
            let visit = visits.find(v => v.getId() === element.visit_id);
            if (visit === undefined) {
                visit = new Visit(element.visit_id, new Date(element.timestamp));
                visits.push(visit);
            }
            const caregivers: Caregiver[] = visit.getCaregivers();
            let caregiver = caregivers.find(c => c.getId() === element.caregiver_id);
            if (caregiver === undefined) {
                caregiver = new Caregiver(element.caregiver_id, new Date(element.timestamp));
                visit.addCaregiver(caregiver);
            }
            caregiver.addEvent(JSON.parse(element.payload));
        });
        visits.sort((visit1, visit2) => {
            return visit2.timestamp - visit1.timestamp;
        });
        return visits;
    }


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

    public getVisits(req: Request, res: Response) {
        EventController.dbService.getVisits(req.query.id, req.query.from, req.query.to).then(result => {
            const visits = EventController.formatResult(result);
            res.json(visits);
        });
    }
}

export default EventController;