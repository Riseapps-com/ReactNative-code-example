import {Country} from '../../../../network/data/CountryInterface'
import React, {ReactElement} from 'react'
import {Text, TextStyle, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import {PRIMARY_COLOR} from '../../../../appConstants'

const selectedGradientColors = ['rgba(0, 54, 167, 0.8)', PRIMARY_COLOR]
const notSelectedGradientColors = ['white', 'white']

export interface Props {
    country: Country,
    onCountryPress?: OnCountryPressCallback
}

interface State {
    isPressed: boolean
}

export interface OnCountryPressCallback {
    (country: Country): void
}

const initialState: State = {
    isPressed: false
}
const defaultProps: Props = {
    country: null
}

class CountriesListCell extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        const {country} = this.props
        const {isPressed} = this.state
        const whiteText: TextStyle = {
            color: 'white'
        }
        const blackText: TextStyle = {
            color: 'black'
        }
        const greyText: TextStyle = {
            color: 'grey'
        }

        return (
            <TouchableOpacity activeOpacity={1}
                              onPress={this.handleCountryPress}
                              onPressIn={this.handlePressIn}
                              onPressOut={this.handlePressOut}
                              style={styles.container}>
                <LinearGradient colors={isPressed ? selectedGradientColors : notSelectedGradientColors}
                                style={styles.contentContainer}>
                    <View style={styles.countryTitleContainer}>
                        <Text style={[styles.countryTitleText, isPressed ? whiteText : blackText]}>
                            {country.name}
                        </Text>
                    </View>
                    <View style={styles.countryCapitalContainer}>
                        <Text style={[styles.countryCapitalText, isPressed ? whiteText : greyText]}>
                            {country.capital}
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    handleCountryPress = (): void => {
        const {
            country,
            onCountryPress
        } = this.props
        if (onCountryPress) {
            onCountryPress(country)
        }
    }

    handlePressIn = (): void => {
        this.setState({
            isPressed: true
        })
    }

    handlePressOut = (): void => {
        this.setState({
            isPressed: false
        })
    }
}

export default CountriesListCell