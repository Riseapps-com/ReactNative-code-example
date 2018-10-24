import {CLEAR, PACKAGE} from '../../appConstants'
import {Action} from '../ActionInterface'

export const GET_COUNTRY_DETAILS = `${PACKAGE}.actions.GET_COUNTRY_DETAILS`

export function getCountryDetails(name: string): Action {
    return {
        type: GET_COUNTRY_DETAILS,
        payload: {
            name
        }
    }
}

export function clearCountryDetails(): Action {
    return {
        type: `${GET_COUNTRY_DETAILS}${CLEAR}`
    }
}