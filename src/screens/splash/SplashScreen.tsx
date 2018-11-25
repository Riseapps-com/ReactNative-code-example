import React, {ReactElement} from 'react'
import {Navigation} from 'react-native-navigation'
import {MENU_SCREEN} from '../registerScreens'
import {Image, SafeAreaView, Text, View} from 'react-native'
import {Options} from 'react-native-navigation/lib/dist/interfaces/Options'
import styles from './styles'
import getImgByName from '../../assets/imgs/getImgByName'
import DeviceInfo from 'react-native-device-info'
import i18n from '../../assets/localization/i18n'
import {PRIMARY_COLOR} from '../../appConstants'

const SPLASH_DURATION: number = 3000

export interface Props {
    componentId?: string
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class SplashScreen extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps
    timerHandle: number

    static options(): Options {
        return {
            layout: {
                backgroundColor: PRIMARY_COLOR,
                orientation: ['portrait']
            },
            topBar: {
                visible: false,
                drawBehind: true
            }
        }
    }

    componentDidMount() {
        this.setTimer()
    }

    componentWillUnmount() {
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

    render(): ReactElement<any> {
        const logoImg: number = getImgByName('logo_white')
        const version: string = `${i18n.t('Version')}: ${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`

        return (
            <SafeAreaView style={styles.container}>
                <Image source={logoImg}
                       resizeMode={'contain'}
                       style={styles.logoImg}/>
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>
                        {version}
                    </Text>
                </View>
            </SafeAreaView>
        )
    }

    startMenuScreen = (): void => {
        Navigation.setStackRoot(this.props.componentId, {
            component: {
                name: MENU_SCREEN
            }
        })
            .catch()
    }
}

export default SplashScreen