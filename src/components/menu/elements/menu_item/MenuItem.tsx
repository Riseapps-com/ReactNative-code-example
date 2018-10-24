import React from 'react'
import {TouchableOpacity, View, Image, Text, ImageStyle, RegisteredStyle} from 'react-native'
import styles from './styles'
import getImgByName, {ImgName} from '../../../../assets/imgs/getImgByName'
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

export enum MenuItemOption {
    AllCountries,
    CountriesBeRegion
}

class MenuItem extends React.Component<Props, State> {
    readonly state: State = {}
    public static defaultProps: Props = {
        menuItemOption: MenuItemOption.AllCountries,
        willShowBottomDivider: false
    }

    public render(): JSX.Element {
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

    private getMenuImg = (): JSX.Element => {
        const {menuItemOption} = this.props
        const flagImg = getImgByName(ImgName.Flag)
        const regionImg = getImgByName(ImgName.Region)
        let source: number = flagImg
        let imgStyle: RegisteredStyle<ImageStyle> = styles.flagImg

        switch (menuItemOption) {
            case MenuItemOption.AllCountries:
                source = flagImg
                imgStyle = styles.flagImg
                break
            case MenuItemOption.CountriesBeRegion:
                source = regionImg
                imgStyle = styles.regionImg
                break
        }

        return (
            <Image source={source}
                   style={imgStyle}/>
        )
    }

    private handleMenuItemPress = (): void => {
        const {
            onMenuItemPress,
            menuItemOption
        } = this.props
        if (onMenuItemPress) {
            onMenuItemPress(menuItemOption)
        }
    }

    private getMenuItemText = (): string => {
        const {menuItemOption} = this.props
        let menuItemText: string = i18n.t('All Countries')

        switch (menuItemOption) {
            case MenuItemOption.AllCountries:
                menuItemText = i18n.t('All Countries')
                break
            case MenuItemOption.CountriesBeRegion:
                menuItemText = i18n.t('Countries by Region')
                break
        }

        return menuItemText
    }

    private getBottomDivider = (): JSX.Element => <View style={styles.bottomDivider}/>
}

export default MenuItem