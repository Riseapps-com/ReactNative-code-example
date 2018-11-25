import {ACTIONS_PACKAGE, CLEAR} from '../../appConstants'
import {Action} from '../ActionInterface'

export const GET_ALL_COUNTRIES = `${ACTIONS_PACKAGE}.GET_ALL_COUNTRIES`

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