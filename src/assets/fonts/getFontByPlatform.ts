import {Platform, TextStyle} from 'react-native'

export enum FontName {
    QuicksandBold = 'quicksand_bold',
    QuicksandRegular = 'quicksand_regular'
}

const getPlatformFont = (fontName: FontName): TextStyle => {
    let fontStyle: TextStyle = {}
    switch (fontName) {
        case FontName.QuicksandBold:
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
        case FontName.QuicksandRegular:
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