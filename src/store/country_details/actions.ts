import {ACTIONS_PACKAGE, CLEAR} from '../../appConstants'
import {Action} from '../ActionInterface'

export const GET_COUNTRY_DETAILS = `${ACTIONS_PACKAGE}.GET_COUNTRY_DETAILS`

export function getCountryDetails(code: string): Action {
    return {
        type: GET_COUNTRY_DETAILS,
        payload: {
            code
        }
    }
}

export function clearCountryDetails(): Action {
    return {
        type: `${GET_COUNTRY_DETAILS}${CLEAR}`
    }
}