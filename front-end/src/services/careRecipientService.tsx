import http from "./httpService";

export function getCareRecipients() {
    return http.get(process.env.REACT_APP_API_SERVER + "/careRecipients");
}
