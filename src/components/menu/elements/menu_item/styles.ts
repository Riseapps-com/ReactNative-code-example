import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native'
import {PRIMARY_COLOR} from '../../../../appConstants'
import getPlatformFont, {FontName} from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle,
    contentContainer: ViewStyle,
    menuImgContainer: ViewStyle,
    flagImg: ImageStyle,
    regionImg: ImageStyle,
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
    flagImg: {
        width: 80,
        height: 100
    },
    regionImg: {
        width: 80,
        height: 80
    },
    menuTextContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8
    },
    menuText: {
        ...getPlatformFont(FontName.QuicksandBold),
        color: 'white',
        fontSize: 20
    },
    bottomDivider: {
        width: '100%',
        height: 2,
        backgroundColor: 'white'
    }
})

export default styles