import  AxiosInstance  from "axios";

class Readings {
    static async deleteReadings() {
        const response = await AxiosInstance.delete('/api/readings/readings?source=UPLOAD')
        return response
    }
}

export default new Readings