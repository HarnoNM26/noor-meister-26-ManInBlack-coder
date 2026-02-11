export const getPrices = async () => {
    const url = 'https://dashboard.elering.ee'
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response;
    console.log(response)
    return result;

    } catch (error) {
        console.log('error', error)
    }   
}