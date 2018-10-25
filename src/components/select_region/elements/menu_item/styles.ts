import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native'
import {PRIMARY_COLOR} from '../../../../appConstants'
import getPlatformFont, {FontName} from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle,
    contentContainer: ViewStyle,
    menuImgContainer: ViewStyle,
    menuImg: ImageStyle,
    menuTextContainer: ViewStyle,
    menuText: TextStyle,
    bottomDivider: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        flexDirection: 'row'
    },
    menuImgContainer: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    menuImg: {
      height: 48,
      width: 70
    },
    menuTextContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingStart: 8,
        paddingEnd: 16
    },
    menuText: {
        ...getPlatformFont(FontName.QuicksandBold),
        color: 'white',
        fontSize: 20
    },
    bottomDivider: {
        width: '100%',
        height: 1,
        backgroundColor: 'white'
    }
})

export default styles