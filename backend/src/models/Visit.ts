import { Caregiver } from "./Caregiver";

export class Visit {
    private id: string;
    private caregivers: Caregiver[] = Array();
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

    public addCaregiver(caregiver: Caregiver) {
        this.caregivers.push(caregiver);
    }

    public getCaregivers(): Caregiver[] {
        return this.caregivers;
    }
}


