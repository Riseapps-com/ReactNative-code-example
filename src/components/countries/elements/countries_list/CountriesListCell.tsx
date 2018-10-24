import {Country} from '../../../../network/data/CountryInterface'
import React from 'react'
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

class CountriesListCell extends React.Component<Props, State> {
    readonly state: State = {
        isPressed: false
    }
    public static defaultProps: Props = {
        country: null
    }

    render(): JSX.Element {
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

    private handleCountryPress = (): void => {
        const {
            country,
            onCountryPress
        } = this.props
        if (onCountryPress) {
            onCountryPress(country)
        }
    }

    private handlePressIn = (): void => {
        this.setState({
            isPressed: true
        })
    }

    private handlePressOut = (): void => {
        this.setState({
            isPressed: false
        })
    }
}

export default CountriesListCell