import {StyleSheet, TextStyle, ViewStyle} from 'react-native'
import getPlatformFont, {FontName} from '../../../../assets/fonts/getFontByPlatform'

export interface Style {
    container: ViewStyle,
    contentContainer: ViewStyle,
    countryTitleContainer: ViewStyle,
    countryTitleText: TextStyle,
    countryCapitalContainer: ViewStyle,
    countryCapitalText: TextStyle
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        padding: 8
    },
    countryTitleContainer: {
        width: '100%',
        justifyContent: 'center'
    },
    countryTitleText: {
        ...getPlatformFont(FontName.QuicksandBold),
        fontSize: 16
    },
    countryCapitalContainer: {
        width: '100%',
        justifyContent: 'center'
    },
    countryCapitalText: {
        ...getPlatformFont(FontName.QuicksandBold),
        fontSize: 14
    }
})

export default styles