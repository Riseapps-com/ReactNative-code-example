import {call, put} from 'redux-saga/effects'
import CountriesApi from '../../network/CountriesApi'
import {GET_ALL_COUNTRIES} from './actions'
import {Action} from '../ActionInterface'
import {FAILED, SUCCESS} from '../../appConstants'
import {Country} from '../../network/data/CountryInterface'

const countriesApi: CountriesApi = new CountriesApi()

export function* getAllCountries() {
    try {
        const allCountries: Country[] = yield call(countriesApi.getAllCountries)
        const action: Action = {
            type: `${GET_ALL_COUNTRIES}${SUCCESS}`,
            response: allCountries
        }
        yield put(action)
    } catch (e) {
        const action: Action = {
            type: `${GET_ALL_COUNTRIES}${FAILED}`,
            response: e.message
        }
        yield put(action)
    }
}