import { ICity } from "../Model/ICitys";

export class CitiesController {
    url: string;

    constructor(url: string){
        this.url = url;
    }

    async getCities(endPoint: string): Promise<ICity[]>{
        const response = await fetch(`${this.url}${endPoint}`)
        const data = await response.json();
        console.log(response.status)
        return data;
    }
    async postCities(endPoint: string, dataCity: ICity){
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataCity)
        })
        const data = await response.json();
        if(response.status !== 201){
            throw new Error('No se pudo agregar la ciudad')
        }
        console.log(response.status)
        return data;
    }
}
