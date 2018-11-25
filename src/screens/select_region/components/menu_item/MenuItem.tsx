import React, {ReactElement} from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import getImgByName from '../../../../assets/imgs/getImgByName'
import i18n from '../../../../assets/localization/i18n'
import {Region} from '../../../../network/data/RegionType'

export interface Props {
    onMenuItemPress?: (region: Region) => void,
    region: Region,
    willShowBottomDivider?: boolean
}

export interface State {
}

const initialState: State = {}
const defaultProps: Props = {
    region: 'africa',
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
        const {region} = this.props
        const africaImg: number = getImgByName('africa')
        const americaImg: number = getImgByName('americas')
        const asiaImg: number = getImgByName('asia')
        const europeImg: number = getImgByName('europe')
        const oceaniaImg: number = getImgByName('oceania')
        let source: number = africaImg

        switch (region) {
            case 'africa':
                source = africaImg
                break
            case 'americas':
                source = americaImg
                break
            case 'asia':
                source = asiaImg
                break
            case 'europe':
                source = europeImg
                break
            case 'oceania':
                source = oceaniaImg
                break
        }

        return (
            <Image source={source}
                   style={styles.menuImg}/>
        )
    }

    handleMenuItemPress = (): void => {
        const {
            onMenuItemPress,
            region
        } = this.props
        if (onMenuItemPress) {
            onMenuItemPress(region)
        }
    }

    getMenuItemText = (): string => {
        const {region} = this.props
        let menuItemText: string = i18n.t('All Countries')

        switch (region) {
            case 'africa':
                menuItemText = i18n.t('Africa')
                break
            case 'americas':
                menuItemText = i18n.t('Americas')
                break
            case 'asia':
                menuItemText = i18n.t('Asia')
                break
            case 'europe':
                menuItemText = i18n.t('Europe')
                break
            case 'oceania':
                menuItemText = i18n.t('Oceania')
                break
        }

        return menuItemText
    }

    getBottomDivider = (): ReactElement<any> => <View style={styles.bottomDivider}/>
}

export default MenuItem