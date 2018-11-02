import React, {ReactElement} from 'react'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import MenuItem, {OnItemPressCallback} from './elements/menu_item/MenuItem'
import {SafeAreaView} from 'react-native'
import styles from './styles'
import {Region} from '../../network/data/RegionType'
import {Navigation} from 'react-native-navigation'
import {COUNTRIES_SCREEN} from '../registerScreens'

export interface Props {
    componentId?: string
}

interface State {
}

const initialState: Props = {}
const defaultProps: State = {}

class SelectRegionScreen extends React.Component<Props, State> {
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
                <MenuItem region={'africa'}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem region={'americas'}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem region={'asia'}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem region={'europe'}
                          onMenuItemPress={this.handleMenuPress}
                          willShowBottomDivider={true}/>
                <MenuItem region={'oceania'}
                          onMenuItemPress={this.handleMenuPress}/>
            </SafeAreaView>
        )
    }

    handleMenuPress: OnItemPressCallback = (region: Region): void => {
        Navigation.push(this.props.componentId, {
            component: {
                name: COUNTRIES_SCREEN,
                passProps: {
                    countriesType: 'countries_by_region',
                    region: region
                }
            }
        })
            .catch()
    }
}

export default SelectRegionScreen