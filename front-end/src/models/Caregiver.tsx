export class Caregiver {
    private id: string;
    private events: string[] = Array();
    private timestamp: Date;

    constructor(id: string, timestamp: Date) {
        this.id = id;
        this.timestamp = timestamp;
    }

    public getId() {
        return this.id;
    }

    public getTimestamp(): Date {
        return this.timestamp;
    }

    public getEvents() {
        return this.events;
    }
}
