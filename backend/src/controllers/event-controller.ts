import DatabaseService from '../services/database-service';

class EventController {
    private static dbService: DatabaseService;

    constructor(dbService: DatabaseService) {
        EventController.dbService = dbService;
    }
}

export default EventController;