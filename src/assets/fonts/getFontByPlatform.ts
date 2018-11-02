import {Platform, TextStyle} from 'react-native'

export type FontName = 'quicksand_bold' | 'quicksand_regular'

const getPlatformFont = (fontName: FontName): TextStyle => {
    let fontStyle: TextStyle = {}
    switch (fontName) {
        case 'quicksand_bold':
            if (Platform.OS === 'android') {
                fontStyle = {
                    fontFamily: 'quicksand_bold'
                }
            } else {
                fontStyle = {
                    fontFamily: 'Quicksand-Bold'
                }
            }
            break
        case 'quicksand_regular':
            if (Platform.OS === 'android') {
                fontStyle = {
                    fontFamily: 'quicksand_regular'
                }
            } else {
                fontStyle = {
                    fontFamily: 'Quicksand-Regular'
                }
            }
            break
    }
    return fontStyle
}

export default getPlatformFont