import {CLEAR, PACKAGE} from '../../appConstants'
import {Action} from '../ActionInterface'

export const GET_ALL_COUNTRIES = `${PACKAGE}.actions.GET_ALL_COUNTRIES`

export function getAllCountries(): Action {
    return {
        type: GET_ALL_COUNTRIES
    }
}

export function clearAllCountries(): Action {
    return {
        type: `${GET_ALL_COUNTRIES}${CLEAR}`
    }
}