import React from 'react'
import {connect} from 'react-redux'
import {Country} from '../../network/data/CountryInterface'
import {Region} from '../../network/data/RegionEnum'
import {AppState} from '../../store/rootReducer'
import {clearCountriesByRegion, getCountriesByRegion} from '../../store/countries_by_region/actions'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import getPlatformFont, {FontName} from '../../assets/fonts/getFontByPlatform'
import {PRIMARY_COLOR} from '../../appConstants'
import {clearAllCountries, getAllCountries} from '../../store/all_countries/actions'
import i18n from '../../assets/localization/i18n'
import {Text, View} from 'react-native'
import styles from './styles'
import CountriesList from './elements/countries_list/CountriesList'
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

export enum CountriesType {
    AllCountries,
    CountriesByRegion
}

type AllProps = Props & PropsFromState & PropsFromDispatch

interface State {
}

class CountriesScreen extends React.Component<AllProps, State> {
    readonly state: State = {}
    public static defaultProps: Props = {
        countriesType: CountriesType.AllCountries
    }

    public static options(passProps: Props): Options {
        return {
            layout: {
                backgroundColor: 'white'
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
                    ...getPlatformFont(FontName.QuicksandBold),
                    color: 'white'
                },
                background: {
                    color: PRIMARY_COLOR
                }
            }
        }
    }

    public componentDidMount() {
        const {
            countriesType,
            region
        } = this.props

        switch (countriesType) {
            case CountriesType.AllCountries:
                this.props.getAllCountries()
                break
            case CountriesType.CountriesByRegion:
                this.props.getCountriesByRegion(region)
                break
        }
    }

    public componentWillUnmount() {
        this.props.clearAllCountries()
        this.props.clearCountriesByRegion()
    }

    public render(): JSX.Element {
        const {
            loading
        } = this.props

        return (
            <View style={styles.container}>
                {
                    this.isError()
                        ? this.getErrorView()
                        : <CountriesList countries={this.getCountries()}
                                         onCountryPress={this.handleCountryPress}/>
                }
                <Spinner visible={loading}
                         color={PRIMARY_COLOR}
                         animation={'fade'}/>
            </View>
        )
    }

    private getErrorView(): JSX.Element {
        const {
            countriesType,
            allCountriesError,
            countriesByRegionError
        } = this.props
        let error: string = ''

        switch (countriesType) {
            case CountriesType.AllCountries:
                error = allCountriesError
                break
            case CountriesType.CountriesByRegion:
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

    private isError(): boolean {
        const {
            countriesType,
            allCountriesError,
            countriesByRegionError
        } = this.props
        let isError: boolean = false

        switch (countriesType) {
            case CountriesType.AllCountries:
                isError = !!allCountriesError
                break
            case CountriesType.CountriesByRegion:
                isError = !!countriesByRegionError
                break
        }

        return isError
    }

    private static getTitle = (passProps: Props): string => {
        const {
            countriesType,
            region
        } = passProps
        let title: string = i18n.t('All')

        switch (countriesType) {
            case CountriesType.AllCountries:
                title = i18n.t('All')
                break
            case CountriesType.CountriesByRegion:
                switch (region) {
                    case Region.Africa:
                        title = i18n.t('Africa')
                        break
                    case Region.Americas:
                        title = i18n.t('Americas')
                        break
                    case Region.Asia:
                        title = i18n.t('Asia')
                        break
                    case Region.Europe:
                        title = i18n.t('Europe')
                        break
                    case Region.Oceania:
                        title = i18n.t('Oceania')
                        break
                }
                break
        }

        return title
    }

    private getCountries = (): Country[] => {
        const {
            countriesType,
            allCountries,
            countriesByRegion
        } = this.props
        let countries: Country[] = allCountries

        switch (countriesType) {
            case CountriesType.AllCountries:
                countries = allCountries
                break
            case CountriesType.CountriesByRegion:
                countries = countriesByRegion
                break
        }

        return countries
    }

    private handleCountryPress = (country: Country): void => {
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

const mapDispatchToProps = {
    getAllCountries,
    getCountriesByRegion,
    clearAllCountries,
    clearCountriesByRegion
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesScreen)