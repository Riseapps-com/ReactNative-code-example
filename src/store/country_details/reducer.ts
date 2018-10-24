import {Country} from '../../network/data/CountryInterface'
import {Action} from '../ActionInterface'
import {GET_COUNTRY_DETAILS} from './actions'
import {CLEAR, FAILED, SUCCESS} from '../../appConstants'

export interface CountryDetailsState {
    readonly data: Country,
    readonly loading: boolean,
    readonly error?: string,
    readonly name: string
}

const initState: CountryDetailsState = {
    data: null,
    loading: false,
    error: 'Data is empty',
    name: ''
}

const countryDetails = (state: CountryDetailsState = initState, action: Action): CountryDetailsState => {
    let newState: CountryDetailsState = null
    switch (action.type) {
        case GET_COUNTRY_DETAILS:
            newState = {
                ...state,
                loading: true,
                name: action.payload.name
            }
            break
        case `${GET_COUNTRY_DETAILS}${SUCCESS}`:
            newState = {
                ...state,
                loading: false,
                data: action.response,
                error: ''
            }
            break
        case `${GET_COUNTRY_DETAILS}${FAILED}`:
            newState = {
                ...state,
                loading: false,
                error: action.response
            }
            break
        case `${GET_COUNTRY_DETAILS}${CLEAR}`:
            newState = initState
            break
    }
    return newState || state
}

export default countryDetails