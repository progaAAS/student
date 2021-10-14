import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3002/',
    headers: {
        ContentType: 'application/json',
        headers: {"Access-Control-Allow-Origin": "*"}
    }
});

export const studentAPI = {
    getStudents() {
        return instance.get(`students`);
    },
    insertStudent(studentData){
        return instance.post(`students?`, studentData);
    }
}