import http from "./httpService";
// import * as { apiUrl } from "../config.json";

export function getVisits(id: string, startDate: Date, endDate: Date) {
    return http.get(process.env.REACT_APP_API_SERVER + '/visits?id=' +
        id + '&from=' + startDate.toISOString().substr(0, 10) + '&to=' + endDate.toISOString().substr(0, 10));
}
