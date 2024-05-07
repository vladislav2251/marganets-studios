import HTTP from "../axios";

export class DataService {
    async getAll() {
        const response = await HTTP.get("/data.json");

        console.log(response.data)

        return response.data;
    };
};

export default new DataService();