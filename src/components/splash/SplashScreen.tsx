import React from 'react'
import {Navigation} from 'react-native-navigation'
import {MENU_SCREEN} from '../registerScreens'
import {Image, View, Text} from 'react-native'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import styles from './styles'
import getImgByName, {ImgName} from '../../assets/imgs/getImgByName'
import DeviceInfo from 'react-native-device-info'
import i18n from '../../assets/localization/i18n'
import {PRIMARY_COLOR} from '../../appConstants'

const SPLASH_DURATION = 3000

export interface Props {
    componentId?: string
}

interface State {
}

class SplashScreen extends React.Component<Props, State> {
    readonly state: State = {}
    public static defaultProps: Props = {}
    private timerHandle: number

    public static options(): Options {
        return {
            layout: {
                backgroundColor: PRIMARY_COLOR
            },
            topBar: {
                visible: false,
                drawBehind: true
            }
        }
    }

    public componentDidMount() {
        this.setTimer()
    }

    public componentWillUnmount() {
        this.clearTimer()
    }

    setTimer = () => {
        this.timerHandle = setTimeout(() => this.startMenuScreen(), SPLASH_DURATION)
    }

    clearTimer = () => {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle)
        }
    }

    public render(): JSX.Element {
        const logoImg = getImgByName(ImgName.LogoWhite)
        const version = `${i18n.t('Version')}: ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`

        return (
            <View style={styles.container}>
                <Image source={logoImg}
                       resizeMode={'contain'}
                       style={styles.logoImg}/>
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>
                        {version}
                    </Text>
                </View>
            </View>
        )
    }

    private startMenuScreen = (): void => {
        Navigation.setStackRoot(this.props.componentId, {
            component: {
                name: MENU_SCREEN
            }
        })
            .catch()
    }
}

export default SplashScreen