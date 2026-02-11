import  axiosInstance  from "axios";

export class health {
    static async getHealth(): Promise<any>{
        const response = await axiosInstance.get('/api/health')
        return response
    }
}