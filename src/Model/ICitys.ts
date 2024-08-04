export interface ICity {
    id?: string | number,
    city: string,
    country: string,
    image: string,
    cityDescription: string,
    date: Date,
    tokenUser?: string
}