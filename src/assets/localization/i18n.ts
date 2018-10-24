// @ts-ignore
import RNLanguages from 'react-native-languages'
// @ts-ignore
import i18n from 'i18n-js'
import en from './en.json'
import de from './de.json'

i18n.locale = RNLanguages.language
i18n.fallbacks = true
i18n.translations = {
    en,
    de
}

export default i18n