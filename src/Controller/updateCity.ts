import { ICity } from "../Model/ICitys";
import { CitiesController } from "./Cities.controller";

const url = 'http://localhost:3000/'
const citiesController = new CitiesController(url)

const idCity = localStorage.getItem('id-edit')
const form = document.querySelector('form') as HTMLFormElement;
const cityToEdit = document.querySelector('#edit-city') as HTMLInputElement;
const countryToEdit = document.querySelector('#edit-country') as HTMLInputElement
const imageToEdit = document.querySelector('#edit-image') as HTMLInputElement
const cityDescriptionToEdit = document.querySelector('#editCity-description') as HTMLTextAreaElement

function showCity(props: ICity) {
    const {city, country, image, cityDescription} = props;
    cityToEdit.value = city
    countryToEdit.value = country
    imageToEdit.value = image
    cityDescriptionToEdit.value = cityDescription
}

if (idCity) {
    const infoCity: ICity = await citiesController.getInfo("cities/", idCity)
    showCity(infoCity)
}

form.addEventListener('submit', async (e: Event)=> {
    e.preventDefault()
    
    const updateCity = {
        city: cityToEdit.value,
        country: countryToEdit.value,
        image: imageToEdit.value,
        cityDescription: cityDescriptionToEdit.value,
        date: new Date()
    }

    try {
        await citiesController.putCities("cities/", idCity, updateCity)
        alert('Se editó la ciudad')
        window.location.href = '../View/home.html'
    } catch {
        console.error('Error al editar la ciudad')
        alert('Error al editar la ciudad')
    }
})
