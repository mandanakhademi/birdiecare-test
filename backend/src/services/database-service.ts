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

    private closeConnection() {
        if (this.connection) {
            this.connection.end();
        }
    }

}

export default DatabaseService;