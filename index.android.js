import {Navigation} from "react-native-navigation";
import {registerScreens, SPLASH_SCREEN} from "./src/components/registerScreens";
import RNLanguages from 'react-native-languages'
import i18n from './src/assets/localization/i18n'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    RNLanguages.addEventListener('change', onLanguagesChange);
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: SPLASH_SCREEN
                    }
                }]
            }
        }
    });
});


// RNLanguages.removeEventListener('change', this.onLanguagesChange)

const onLanguagesChange = ({language}) => i18n.locale = language;