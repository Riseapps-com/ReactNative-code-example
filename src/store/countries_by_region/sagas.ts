import {call, put} from 'redux-saga/effects'
import CountriesApi from '../../network/CountriesApi'
import {GET_COUNTRIES_BY_REGION} from './actions'
import {Action} from '../ActionInterface'
import {FAILED, SUCCESS} from '../../appConstants'
import {Country} from '../../network/data/CountryInterface'

const countriesApi: CountriesApi = new CountriesApi()

export function* getCountriesByRegion(action: Action) {
    try {
        const countriesByRegion: Country[] = yield call(countriesApi.getCountriesByRegion, action.payload.region)
        const nextAction: Action = {
            type: `${GET_COUNTRIES_BY_REGION}${SUCCESS}`,
            response: countriesByRegion
        }
        yield put(nextAction)
    } catch (e) {
        const nextAction: Action = {
            type: `${GET_COUNTRIES_BY_REGION}${FAILED}`,
            response: e.message
        }
        yield put(nextAction)
    }
}