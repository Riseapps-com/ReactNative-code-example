import React from 'react'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import MenuItem, {OnItemPressCallback} from './elements/menu_item/MenuItem'
import {View} from 'react-native'
import styles from './styles'
import {Region} from '../../network/data/RegionEnum'
import {Navigation} from 'react-native-navigation'
import {COUNTRIES_SCREEN} from '../registerScreens'
import {CountriesType} from '../countries/CountriesScreen'

export interface Props {
    componentId?: string
}

interface State {
}

class SelectRegionScreen extends React.Component<Props, State> {
    readonly state: State = {}
    public static defaultProps: Props = {}

    public static options(): Options {
        return {
            layout: {
                backgroundColor: 'white'
            },
            topBar: {
                visible: false,
                drawBehind: true
            }
        }
    }

    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <MenuItem region={Region.Africa}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem region={Region.Americas}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem region={Region.Asia}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem region={Region.Europe}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem region={Region.Oceania}
                          onMenuItemPress={this.handleMenuPress}/>
            </View>
        )
    }

    private handleMenuPress: OnItemPressCallback = (region: Region): void => {
        Navigation.push(this.props.componentId, {
            component: {
                name: COUNTRIES_SCREEN,
                passProps: {
                    countriesType: CountriesType.CountriesByRegion,
                    region: region
                }
            }
        })
            .catch()
    }
}

export default SelectRegionScreen