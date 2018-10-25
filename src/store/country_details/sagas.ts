import {Action} from '../ActionInterface'
import {call, put} from 'redux-saga/effects'
import {Country} from '../../network/data/CountryInterface'
import {FAILED, SUCCESS} from '../../appConstants'
import {GET_COUNTRY_DETAILS} from './actions'
import CountriesApi from '../../network/CountriesApi'

const countriesApi: CountriesApi = new CountriesApi()

export function* getCountryDetails(action: Action) {
    try {
        const countryByName: Country[] = yield call(countriesApi.getCountryByCode, action.payload.code)
        const nextAction: Action = {
            type: `${GET_COUNTRY_DETAILS}${SUCCESS}`,
            response: countryByName
        }
        yield put(nextAction)
    } catch (e) {
        const nextAction: Action = {
            type: `${GET_COUNTRY_DETAILS}${FAILED}`,
            response: e.message
        }
        yield put(nextAction)
    }
}