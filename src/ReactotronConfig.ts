// @ts-ignore
import {reactotronRedux} from 'reactotron-redux'
// @ts-ignore
import Reactotron, {trackGlobalErrors, asyncStorage, networking} from 'reactotron-react-native'
// @ts-ignore
import sagaPlugin from 'reactotron-redux-saga'

const reactotron = Reactotron
    .configure()
    .useReactNative()
    .use(trackGlobalErrors({
        offline: true
    }))
    .use(asyncStorage())
    .use(networking())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect()

export default reactotron