import { ICity } from "../Model/ICitys";
import { CitiesController } from "./Cities.controller";
import Swal from "sweetalert2";

const form = document.querySelector('form') as HTMLFormElement;
const city = document.querySelector('#new-city') as HTMLInputElement;
const country = document.querySelector('#new-country') as HTMLInputElement
const image = document.querySelector('#new-image') as HTMLInputElement
const cityDescription = document.querySelector('#newCity-description') as HTMLTextAreaElement

// const cityArray:ICity[] = JSON.parse(localStorage.getItem("cityArray") || "[]")
const url = 'http://localhost:3000/'
let tokenUser = sessionStorage.getItem('token') as string
const citiesController = new CitiesController(url);

document.addEventListener('DOMContentLoaded', async () => {
    const idCity = localStorage.getItem('id-edit');
    
    if (idCity) {
        try {
            const infoCity: ICity = await citiesController.getInfo("cities/", idCity);
            city.value = infoCity.city;
            country.value = infoCity.country;
            image.value = infoCity.image;
            cityDescription.value = infoCity.cityDescription;
        } catch (error) {
            console.error('Error fetching city information:', error);
        }
    }

form.addEventListener('submit', async (e: Event) => {
    e.preventDefault()
    
    const cityData = {
        city: city.value,
        country: country.value,
        image: image.value,
        cityDescription: cityDescription.value,
        date: new Date(),
        tokenUser: tokenUser
    }

    try {
        if(idCity){
            const cityEdited = await citiesController.putCities('cities/', idCity, cityData)
            console.log(cityEdited)
            localStorage.removeItem('id-edit')
            alert('Se editó la ciudad')
        } else {
            const cityAdded = await citiesController.postCities("cities", cityData)
            console.log(cityAdded)
            // alert('Se agregó ciudad')
            Swal.fire({
                title: 'Ciudad agregada',
                text: 'Se agregó la ciudad exitosamente',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = '../View/home.html';
            });
            form.reset()
            // window.location.href = '../View/home.html'
        }
    } catch (error) {
        console.error(error)
        // alert('No se pudo agregar la ciudad')
        Swal.fire({
            title: 'Error',
            text: 'No se pudo agregar la ciudad',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    
    
    // cityArray.push(newCity)
    // localStorage.setItem('cityArray', JSON.stringify(cityArray))
    // form.reset()
    // alert('Se agregó ciudad')

})  
})