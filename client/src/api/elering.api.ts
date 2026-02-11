import  AxiosInstance  from "axios";

class elering{
    static async eleringData(): Promise<any>{
        const response = AxiosInstance.get('/api/nps/prices')
        return response
    }
}
export default elering;