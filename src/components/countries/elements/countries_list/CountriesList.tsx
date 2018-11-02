import React, {ReactElement} from 'react'
import {Country} from '../../../../network/data/CountryInterface'
import CountriesListCell, {OnCountryPressCallback} from './CountriesListCell'
import {FlatList} from 'react-native'

export interface Props {
    countries: Country[],
    onCountryPress?: OnCountryPressCallback
}

export interface State {
}

const initialState: State = {}
const defaultProps: Props = {
    countries: []
}

class CountriesList extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        const {
            countries,
        } = this.props

        return (
            <FlatList data={countries}
                      renderItem={({item}) => this.getRenderItem(item)}
                      keyExtractor={item => item.id}/>
        )
    }

    getRenderItem = (item: Country): ReactElement<any> => {
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