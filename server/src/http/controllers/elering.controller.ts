import { getPrices } from "../../services/elering";

export const EleringPrices = () => {
    const response = getPrices()
    return response
}
