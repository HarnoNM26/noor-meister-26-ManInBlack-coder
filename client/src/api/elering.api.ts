import  AxiosInstance  from "axios";

export class elering{
    static async eleringData(): Promise<any>{
        const response = await AxiosInstance.get('/api/nps/prices')
        return response
    };

    static async postEleringData(): Promise<any>{
        const response = AxiosInstance.post('/api/sync/prices')
        if (!response) {
            return false
        }
        return true
    };
}
export default elering;