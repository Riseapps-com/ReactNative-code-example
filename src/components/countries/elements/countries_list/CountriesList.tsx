import React from 'react'
import {Country} from '../../../../network/data/CountryInterface'
import CountriesListCell, {OnCountryPressCallback} from './CountriesListCell'
import {FlatList} from 'react-native'

export interface Props {
    countries: Country[],
    onCountryPress?: OnCountryPressCallback
}

export interface State {
}

class CountriesList extends React.Component<Props, State> {
    readonly state: State = {}
    public static defaultProps: Props = {
        countries: []
    }

    public render(): JSX.Element {
        const {
            countries,
        } = this.props

        return (
            <FlatList data={countries}
                      renderItem={({item}) => this.getRenderItem(item)}
                      keyExtractor={item => item.id}/>
        )
    }

    private getRenderItem = (item: Country): JSX.Element => {
        const {
            onCountryPress
        } = this.props

        return (
            <CountriesListCell country={item}
                               onCountryPress={onCountryPress}/>
        )
    }
}

export default CountriesList