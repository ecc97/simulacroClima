import { ILogin } from "../Model/ILogin";

export class PageController {
    url: string;

    constructor(url:string){
        this.url = url;
    }

    async login(data: ILogin, endPoint:string){
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(response.status !== 200){
            throw new Error('No se pudo iniciar sesión')
        } else {
            alert('')
        }
        const token = response.json()
        
        return token
    }
}