import * as mysql from 'promise-mysql'

class DatabaseService {
    private connection: mysql.Connection | undefined;

    // tslint:disable-next-line:no-empty
    constructor() {
    }

    public async openConnection() {
        this.connection = await mysql.createConnection({
            database: process.env.DATABASE,
            host: process.env.HOST,
            password: process.env.PASSWORD,
            user: process.env.USER,
        });
    }

    public async getAllCareRecipients() {
        await this.openConnection();

        if (this.connection) {
            const result = this.connection.query("select care_recipient_id from events group by care_recipient_id");

            this.closeConnection();
            return result;
        }
    }

    public async getVisits(carRecipientId: string, fromDate: string, toDate: string) {
        await this.openConnection();

        if (this.connection) {
            const result = this.connection.query("select * from events where care_recipient_id='" +
                carRecipientId + "' and timestamp between '" + fromDate + "' and '" + toDate + "' and visit_id is not null order by visit_id,caregiver_id, timestamp");
            this.closeConnection();
            return result;
        }
    }

    private closeConnection() {
        if (this.connection) {
            this.connection.end();
        }
    }

}

export default DatabaseService;