import React from 'react'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import MenuItem, {MenuItemOption, OnItemPressCallback} from './elements/menu_item/MenuItem'
import {View} from 'react-native'
import styles from './styles'
import {Navigation} from 'react-native-navigation'
import {COUNTRIES_SCREEN, SELECT_REGION_SCREEN} from '../registerScreens'
import {CountriesType} from '../countries/CountriesScreen'

export interface Props {
    componentId?: string
}

interface State {
}

class MenuScreen extends React.Component<Props, State> {
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
                <MenuItem menuItemOption={MenuItemOption.AllCountries}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem menuItemOption={MenuItemOption.CountriesBeRegion}
                          onMenuItemPress={this.handleMenuPress}/>
            </View>
        )
    }

    private handleMenuPress: OnItemPressCallback = (menuItemOption: MenuItemOption): void => {
        switch (menuItemOption) {
            case MenuItemOption.AllCountries:
                this.startAllCoutriesScreen()
                break
            case MenuItemOption.CountriesBeRegion:
                this.startSelectRegionScreen()
                break
        }
    }

    private startAllCoutriesScreen = (): void => {
        Navigation.push(this.props.componentId, {
            component: {
                name: COUNTRIES_SCREEN,
                passProps: {
                    countriesType: CountriesType.AllCountries
                }
            }
        })
            .catch()
    }

    private startSelectRegionScreen = (): void => {
        Navigation.push(this.props.componentId, {
            component: {
                name: SELECT_REGION_SCREEN
            }
        })
            .catch()
    }
}

export default MenuScreen