import axios from 'axios'
import {Country} from './data/CountryInterface'
import {Region} from './data/RegionEnum'
import updateIds from '../index'
import enableAxiosLogger from './logger/enableAxiosLogger'

const BASE_URL = 'https://restcountries.eu/rest/v2'
enableAxiosLogger()

class CountriesApi {
    public getAllCountries = (): Promise<Country[]> => {
        return axios.get(`${BASE_URL}/all`)
            .then(response => updateIds<Country>(response.data))
    }

    public getCountriesByRegion = (region: Region): Promise<Country[]> => {
        return axios.get(`${BASE_URL}/region/${region}`)
            .then(response => updateIds<Country>(response.data))
    }

    public getCountryByCode = (code: string): Promise<Country> => {
        return axios.get(`${BASE_URL}/alpha/${code}`)
            .then(response => response.data)
    }
}

export default CountriesApi