import React from 'react'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import getImgByName, {ImgName} from '../../assets/imgs/getImgByName'
import getPlatformFont, {FontName} from '../../assets/fonts/getFontByPlatform'
import {PRIMARY_COLOR} from '../../appConstants'
import {Country} from '../../network/data/CountryInterface'
import {AppState} from '../../store/rootReducer'
import {connect} from 'react-redux'
import {clearCountryDetails, getCountryDetails} from '../../store/country_details/actions'
import {View} from 'react-native'
import styles from './styles'
import CountryDetailsView from './elements/country_details_view/CountryDetailsView'
// @ts-ignore
import Spinner from 'react-native-loading-spinner-overlay'

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

interface State {
}

class CountryDetailsScreen extends React.Component<AllProps, State> {
    readonly state: State = {}
    public static defaultProps: Props = {}

    public static options(passProps: Props): Options {
        return {
            layout: {
                backgroundColor: 'white'
            },
            topBar: {
                visible: true,
                animate: false,
                // backButton: {
                //     icon: getImgByName(ImgName.BackArrow)
                // },
                // @ts-ignore
                title: {
                    text: passProps.country.name,
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
        const {country} = this.props
        this.props.getCountryDetails(country.nativeName)
    }

    public componentWillUnmount() {
        this.props.clearCountryDetails()
    }

    public render(): JSX.Element {
        const {
            countryDetails,
            loading
        } = this.props

        return (
            <View style={styles.container}>
                <CountryDetailsView country={countryDetails}/>
                <Spinner visible={loading}
                         color={PRIMARY_COLOR}
                         animation={'fade'}/>
            </View>
        )
    }
}

const mapStateToProps = (state: AppState): PropsFromState => {
    return {
        countryDetails: state.countryDetails.data,
        loading: state.countryDetails.loading
    }
}

const mapDispatchToProps = {
    getCountryDetails,
    clearCountryDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetailsScreen)