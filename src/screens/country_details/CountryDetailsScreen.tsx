import React, {ReactElement} from 'react'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import getPlatformFont from '../../assets/fonts/getFontByPlatform'
import {PRIMARY_COLOR} from '../../appConstants'
import {Country} from '../../network/data/CountryInterface'
import {AppState} from '../../store/rootReducer'
import {connect} from 'react-redux'
import {clearCountryDetails, getCountryDetails} from '../../store/country_details/actions'
import styles from './styles'
import CountryDetailsView from './components/country_details_view/CountryDetailsView'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'
import {SafeAreaView} from 'react-native'

export interface Props {
    componentId?: string,
    country?: Country
}

interface PropsFromState {
    countryDetails: Country,
    loading: boolean
}

interface PropsFromDispatch {
    getCountryDetails: typeof getCountryDetails,
    clearCountryDetails: typeof clearCountryDetails
}

type AllProps = Props & PropsFromState & PropsFromDispatch

const initialState: State = {}
const defaultProps: Props = {}

interface State {
}

class CountryDetailsScreen extends React.Component<AllProps, State> {
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
                    text: passProps.country.name,
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
        const {country} = this.props
        this.props.getCountryDetails(country.alpha2Code)
    }

    componentWillUnmount() {
        this.props.clearCountryDetails()
    }

    render(): ReactElement<any> {
        const {
            countryDetails,
            loading
        } = this.props

        return (
            <SafeAreaView style={styles.container}>
                <CountryDetailsView country={countryDetails}/>
                <Spinner visible={loading}
                         color={PRIMARY_COLOR}
                         animation={'fade'}/>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state: AppState): PropsFromState => {
    return {
        countryDetails: state.countryDetails.data,
        loading: state.countryDetails.loading
    }
}

const mapDispatchToProps: PropsFromDispatch = {
    getCountryDetails,
    clearCountryDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetailsScreen)