import React, {ReactElement} from 'react'
import {connect} from 'react-redux'
import {Country} from '../../network/data/CountryInterface'
import {Region} from '../../network/data/RegionType'
import {AppState} from '../../store/rootReducer'
import {clearCountriesByRegion, getCountriesByRegion} from '../../store/countries_by_region/actions'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import getPlatformFont from '../../assets/fonts/getFontByPlatform'
import {PRIMARY_COLOR} from '../../appConstants'
import {clearAllCountries, getAllCountries} from '../../store/all_countries/actions'
import i18n from '../../assets/localization/i18n'
import {SafeAreaView, Text, View} from 'react-native'
import styles from './styles'
import CountriesList from './components/countries_list/CountriesList'
import {Navigation} from 'react-native-navigation'
import {COUNTRY_DETAILS_SCREEN} from '../registerScreens'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'

export interface Props {
    componentId?: string,
    countriesType: CountriesType,
    region?: Region
}

interface PropsFromState {
    allCountries: Country[],
    countriesByRegion: Country[],
    loading: boolean,
    allCountriesError: string,
    countriesByRegionError: string
}

interface PropsFromDispatch {
    getAllCountries: typeof getAllCountries,
    getCountriesByRegion: typeof getCountriesByRegion,
    clearAllCountries: typeof clearAllCountries,
    clearCountriesByRegion: typeof clearCountriesByRegion
}

export type CountriesType = 'all_countries' | 'countries_by_region'

type AllProps = Props & PropsFromState & PropsFromDispatch

interface State {
}

const initialState: State = {}
const defaultProps: Props = {
    countriesType: 'all_countries'
}

class CountriesScreen extends React.Component<AllProps, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static options(passProps: Props): Options {
        return {
            layout: {
                backgroundColor: 'white',
                orientation: ['portrait']
            },
            topBar: {
                visible: true,
                animate: false,
                backButton: {
                    color: 'white'
                },
                // @ts-ignore
                title: {
                    text: this.getTitle(passProps),
                    ...getPlatformFont('quicksand_bold'),
                    color: 'white'
                },
                background: {
                    color: PRIMARY_COLOR
                }
            }
        }
    }

    componentDidMount() {
        const {
            countriesType,
            region
        } = this.props

        switch (countriesType) {
            case 'all_countries':
                this.props.getAllCountries()
                break
            case 'countries_by_region':
                this.props.getCountriesByRegion(region)
                break
        }
    }

    componentWillUnmount() {
        this.props.clearAllCountries()
        this.props.clearCountriesByRegion()
    }

    render(): ReactElement<any> {
        const {
            loading
        } = this.props

        return (
            <SafeAreaView style={styles.container}>
                {
                    this.isError()
                        ? this.getErrorView()
                        : <CountriesList countries={this.getCountries()}
                                         onCountryPress={this.handleCountryPress}/>
                }
                <Spinner visible={loading}
                         color={PRIMARY_COLOR}
                         animation={'fade'}/>
            </SafeAreaView>
        )
    }

    getErrorView(): ReactElement<any> {
        const {
            countriesType,
            allCountriesError,
            countriesByRegionError
        } = this.props
        let error: string = ''

        switch (countriesType) {
            case 'all_countries':
                error = allCountriesError
                break
            case 'countries_by_region':
                error = countriesByRegionError
                break
        }

        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                    {error}
                </Text>
            </View>
        )
    }

    isError(): boolean {
        const {
            countriesType,
            allCountriesError,
            countriesByRegionError
        } = this.props
        let isError: boolean = false

        switch (countriesType) {
            case 'all_countries':
                isError = !!allCountriesError
                break
            case 'countries_by_region':
                isError = !!countriesByRegionError
                break
        }

        return isError
    }

    static getTitle = (passProps: Props): string => {
        const {
            countriesType,
            region
        } = passProps
        let title: string = i18n.t('All')

        switch (countriesType) {
            case 'all_countries':
                title = i18n.t('All')
                break
            case 'countries_by_region':
                switch (region) {
                    case 'africa':
                        title = i18n.t('Africa')
                        break
                    case 'americas':
                        title = i18n.t('Americas')
                        break
                    case 'asia':
                        title = i18n.t('Asia')
                        break
                    case 'europe':
                        title = i18n.t('Europe')
                        break
                    case 'oceania':
                        title = i18n.t('Oceania')
                        break
                }
                break
        }

        return title
    }

    getCountries = (): Country[] => {
        const {
            countriesType,
            allCountries,
            countriesByRegion
        } = this.props
        let countries: Country[] = allCountries

        switch (countriesType) {
            case 'all_countries':
                countries = allCountries
                break
            case 'countries_by_region':
                countries = countriesByRegion
                break
        }

        return countries
    }

    handleCountryPress = (country: Country): void => {
        Navigation.push(this.props.componentId, {
            component: {
                name: COUNTRY_DETAILS_SCREEN,
                passProps: {
                    country
                }
            }
        })
            .catch()
    }
}

const mapStateToProps = (state: AppState): PropsFromState => {
    return {
        allCountries: state.allCountries.data,
        countriesByRegion: state.countriesByRegion.data,
        loading: state.allCountries.loading || state.countriesByRegion.loading,
        allCountriesError: state.allCountries.error,
        countriesByRegionError: state.countriesByRegion.error
    }
}

const mapDispatchToProps: PropsFromDispatch = {
    getAllCountries,
    getCountriesByRegion,
    clearAllCountries,
    clearCountriesByRegion
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesScreen)