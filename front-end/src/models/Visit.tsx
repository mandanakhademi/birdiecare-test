import { Caregiver } from "./Caregiver";

export class Visit {
    public id: string;
    public caregivers: Caregiver[] = Array();
    public timestamp: Date;

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

    public getCaregivers(): Caregiver[] {
        return this.caregivers;
    }
}
