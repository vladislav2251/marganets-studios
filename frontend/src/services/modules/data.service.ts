import HTTP from "@/services/axios";

export class DataService {
    async getAll() {
        const response = await HTTP.get("/data.json");
        return response.data;
    };
};

export default new DataService();