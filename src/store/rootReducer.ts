import {combineReducers, Reducer} from 'redux'
import allCountries, {AllCountriesState} from './all_countries/reducer'
import countriesByRegion, {CountriesByRegionState} from './countries_by_region/reducer'
import countryDetails, {CountryDetailsState} from './country_details/reducer'

export interface AppState {
    allCountries: AllCountriesState,
    countriesByRegion: CountriesByRegionState,
    countryDetails: CountryDetailsState
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    allCountries,
    countriesByRegion,
    countryDetails
})