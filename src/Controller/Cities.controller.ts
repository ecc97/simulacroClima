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
    async postCities(endPoint: string, dataCity: ICity): Promise<ICity>{
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataCity)
        })
        const data: ICity = await response.json();
        if(response.status !== 201){
            throw new Error('No se pudo agregar la ciudad')
        }
        console.log(response.status)
        return data;
    }

    async getInfo(endPoint: string, idCity: string | null): Promise<ICity>{
        const response = await fetch(`${this.url}${endPoint}${idCity}`)
        const data = await response.json()
        console.log(data)
        return data
    }
    async putCities(endPoint: string, idCity: string | null, dataCity: ICity): Promise<ICity>{
        const response = await fetch(`${this.url}${endPoint}${idCity}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataCity)
        })
        const data: ICity = await response.json()
        if(response.status!== 200){
            throw new Error('No se pudo actualizar la ciudad')
        }
        console.log(response.status)
        return data
    }
    async deleteCities(endPoint: string, idCity: string): Promise<void> {
        const response = await fetch(`${this.url}${endPoint}${idCity}`, {
            method: 'DELETE'
        });
    
        if (response.status !== 200) {
            throw new Error('No se pudo eliminar la ciudad');
        }
        console.log(response.status);
    
        return;
    }
}
