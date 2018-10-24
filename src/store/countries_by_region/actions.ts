import {CLEAR, PACKAGE} from '../../appConstants'
import {Action} from '../ActionInterface'
import {Region} from '../../network/data/RegionEnum'

export const GET_COUNTRIES_BY_REGION = `${PACKAGE}.actions.GET_COUNTRIES_BY_REGION`

export function getCountriesByRegion(region: Region): Action {
    return {
        type: GET_COUNTRIES_BY_REGION,
        payload: {
            region
        }
    }
}

export function clearCountriesByRegion(): Action {
    return {
        type: `${GET_COUNTRIES_BY_REGION}${CLEAR}`
    }
}