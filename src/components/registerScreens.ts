import {PACKAGE} from '../appConstants'
import {Navigation} from 'react-native-navigation'
import SplashScreen from './splash/SplashScreen'
import {Provider} from 'react-redux'
import {store} from '../store/configureStore'
import MenuScreen from './menu/MenuScreen'
import CountriesScreen from './countries/CountriesScreen'
import SelectRegionScreen from './select_region/SelectRegionScreen'
import CountryDetailsScreen from './country_details/CountryDetailsScreen'

// SPLASH
export const SPLASH_SCREEN = `${PACKAGE}.screens.SplashScreen`
// MENU
export const MENU_SCREEN = `${PACKAGE}.screens.MenuScreen`
// COUNTRIES
export const COUNTRIES_SCREEN = `${PACKAGE}.screens.CountriesScreen`
// SELECT REGION
export const SELECT_REGION_SCREEN = `${PACKAGE}.screens.SelectRegionScreen`
// COUNTRY DETAILS
export const COUNTRY_DETAILS_SCREEN = `${PACKAGE}.screens.CountryDetailsScreen`


export function registerScreens(): void {
    Navigation.registerComponentWithRedux(SPLASH_SCREEN, () => SplashScreen, Provider, store)
    Navigation.registerComponentWithRedux(MENU_SCREEN, () => MenuScreen, Provider, store)
    Navigation.registerComponentWithRedux(COUNTRIES_SCREEN, () => CountriesScreen, Provider, store)
    Navigation.registerComponentWithRedux(SELECT_REGION_SCREEN, () => SelectRegionScreen, Provider, store)
    Navigation.registerComponentWithRedux(COUNTRY_DETAILS_SCREEN, () => CountryDetailsScreen, Provider, store)
}