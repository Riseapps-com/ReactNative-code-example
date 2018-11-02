import React, {ReactElement} from 'react'
import {Image, ImageStyle, RegisteredStyle, Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import getImgByName from '../../../../assets/imgs/getImgByName'
import i18n from '../../../../assets/localization/i18n'

export interface Props {
    onMenuItemPress?: OnItemPressCallback,
    menuItemOption: MenuItemOption,
    willShowBottomDivider?: boolean
}

export interface OnItemPressCallback {
    (menuItemOption: MenuItemOption): void
}

export interface State {
}

export type MenuItemOption = 'all_countries' | 'countries_by_region'

const initialState: State = {}
const defaultProps: Props = {
    menuItemOption: 'all_countries',
    willShowBottomDivider: false
}

class MenuItem extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        const {willShowBottomDivider} = this.props

        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.8}
                                  onPress={this.handleMenuItemPress}
                                  style={styles.contentContainer}>
                    <View style={styles.menuImgContainer}>
                        {this.getMenuImg()}
                    </View>
                    <View style={styles.menuTextContainer}>
                        <Text style={styles.menuText}>
                            {this.getMenuItemText()}
                        </Text>
                    </View>
                </TouchableOpacity>
                {willShowBottomDivider ? this.getBottomDivider() : null}
            </View>
        )
    }

    getMenuImg = (): ReactElement<any> => {
        const {menuItemOption} = this.props
        const flagImg = getImgByName('flag')
        const regionImg = getImgByName('region')
        let source: number = flagImg
        let imgStyle: RegisteredStyle<ImageStyle> = styles.flagImg

        switch (menuItemOption) {
            case 'all_countries':
                source = flagImg
                imgStyle = styles.flagImg
                break
            case 'countries_by_region':
                source = regionImg
                imgStyle = styles.regionImg
                break
        }

        return (
            <Image source={source}
                   style={imgStyle}/>
        )
    }

    handleMenuItemPress = (): void => {
        const {
            onMenuItemPress,
            menuItemOption
        } = this.props
        if (onMenuItemPress) {
            onMenuItemPress(menuItemOption)
        }
    }

    getMenuItemText = (): string => {
        const {menuItemOption} = this.props
        let menuItemText: string = i18n.t('All Countries')

        switch (menuItemOption) {
            case 'all_countries':
                menuItemText = i18n.t('All Countries')
                break
            case 'countries_by_region':
                menuItemText = i18n.t('Countries by Region')
                break
        }

        return menuItemText
    }

    getBottomDivider = (): ReactElement<any> => <View style={styles.bottomDivider}/>
}

export default MenuItem