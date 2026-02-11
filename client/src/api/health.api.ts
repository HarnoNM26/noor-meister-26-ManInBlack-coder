import  axiosInstance  from "axios";

 class health {
    static async getHealth(): Promise<any>{
        const response = await axiosInstance.get('/api/health/check')
        return response
    }
}

export default health;