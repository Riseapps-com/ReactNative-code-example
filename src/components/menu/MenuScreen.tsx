import React, {ReactElement} from 'react'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import MenuItem, {MenuItemOption, OnItemPressCallback} from './elements/menu_item/MenuItem'
import {SafeAreaView} from 'react-native'
import styles from './styles'
import {Navigation} from 'react-native-navigation'
import {COUNTRIES_SCREEN, SELECT_REGION_SCREEN} from '../registerScreens'

export interface Props {
    componentId?: string
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class MenuScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static options(): Options {
        return {
            layout: {
                backgroundColor: 'white',
                orientation: ['portrait']
            },
            topBar: {
                visible: false,
                drawBehind: true
            }
        }
    }

    render(): ReactElement<any> {
        return (
            <SafeAreaView style={styles.container}>
                <MenuItem menuItemOption={'all_countries'}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem menuItemOption={'countries_by_region'}
                          onMenuItemPress={this.handleMenuPress}/>
            </SafeAreaView>
        )
    }

    handleMenuPress: OnItemPressCallback = (menuItemOption: MenuItemOption): void => {
        switch (menuItemOption) {
            case 'all_countries':
                this.startAllCoutriesScreen()
                break
            case 'countries_by_region':
                this.startSelectRegionScreen()
                break
        }
    }

    startAllCoutriesScreen = (): void => {
        Navigation.push(this.props.componentId, {
            component: {
                name: COUNTRIES_SCREEN,
                passProps: {
                    countriesType: 'all_countries'
                }
            }
        })
            .catch()
    }

    startSelectRegionScreen = (): void => {
        Navigation.push(this.props.componentId, {
            component: {
                name: SELECT_REGION_SCREEN
            }
        })
            .catch()
    }
}

export default MenuScreen