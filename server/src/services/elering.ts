import { Response } from "express";

export const getPrices = async () => {
    const url = 'https://dashboard.elering.ee'
    try {
        const response = await fetch(url)
        
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        console.log(response)
        return response.status

    } catch (error) {
        console.log('INTERNAL SERVER error', error)
    }   
}