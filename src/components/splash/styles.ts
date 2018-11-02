import {Dimensions, ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native'
import getPlatformFont from '../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle,
    logoImg: ImageStyle,
    versionContainer: ViewStyle,
    versionText: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImg: {
        width: Dimensions.get('window').width - 32
    },
    versionContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 16
    },
    versionText: {
        ...getPlatformFont('quicksand_bold'),
        color: 'white',
        fontSize: 16
    }
})

export default styles