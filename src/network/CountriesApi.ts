import axios from 'axios'
import {Country} from './data/CountryInterface'
import {Region} from './data/RegionType'
import updateIds from '../index'
import enableAxiosLogger from './logger/enableAxiosLogger'

const BASE_URL = 'https://restcountries.eu/rest/v2'
enableAxiosLogger()

class CountriesApi {
    getAllCountries = (): Promise<Country[]> => {
        return axios.get(`${BASE_URL}/all`)
            .then(response => updateIds<Country>(response.data))
    }

    getCountriesByRegion = (region: Region): Promise<Country[]> => {
        return axios.get(`${BASE_URL}/region/${region}`)
            .then(response => updateIds<Country>(response.data))
    }

    getCountryByCode = (code: string): Promise<Country> => {
        return axios.get(`${BASE_URL}/alpha/${code}`)
            .then(response => response.data)
    }
}

export default CountriesApi