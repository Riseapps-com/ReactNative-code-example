import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import getImgByName, {ImgName} from '../../../../assets/imgs/getImgByName'
import i18n from '../../../../assets/localization/i18n'
import {Region} from '../../../../network/data/RegionEnum'

export interface Props {
    onMenuItemPress?: OnItemPressCallback,
    region: Region,
    willShowBottomDivider?: boolean
}

export interface OnItemPressCallback {
    (region: Region): void
}

export interface State {
}

class MenuItem extends React.Component<Props, State> {
    readonly state: State = {}
    public static defaultProps: Props = {
        region: Region.Africa,
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
        const {region} = this.props
        const africaImg = getImgByName(ImgName.Africa)
        const americaImg = getImgByName(ImgName.Americas)
        const asiaImg = getImgByName(ImgName.Asia)
        const europeImg = getImgByName(ImgName.Europe)
        const oceaniaImg = getImgByName(ImgName.Oceania)
        let source: number = africaImg

        switch (region) {
            case Region.Africa:
                source = africaImg
                break
            case Region.Americas:
                source = americaImg
                break
            case Region.Asia:
                source = asiaImg
                break
            case Region.Europe:
                source = europeImg
                break
            case Region.Oceania:
                source = oceaniaImg
                break
        }

        return (
            <Image source={source}
                   style={styles.menuImg}/>
        )
    }

    private handleMenuItemPress = (): void => {
        const {
            onMenuItemPress,
            region
        } = this.props
        if (onMenuItemPress) {
            onMenuItemPress(region)
        }
    }

    private getMenuItemText = (): string => {
        const {region} = this.props
        let menuItemText: string = i18n.t('All Countries')

        switch (region) {
            case Region.Africa:
                menuItemText = i18n.t('Africa')
                break
            case Region.Americas:
                menuItemText = i18n.t('Americas')
                break
            case Region.Asia:
                menuItemText = i18n.t('Asia')
                break
            case Region.Europe:
                menuItemText = i18n.t('Europe')
                break
            case Region.Oceania:
                menuItemText = i18n.t('Oceania')
                break
        }

        return menuItemText
    }

    private getBottomDivider = (): JSX.Element => <View style={styles.bottomDivider}/>
}

export default MenuItem