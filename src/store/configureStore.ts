import {applyMiddleware, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './rootSaga'
import {AppState, rootReducer} from './rootReducer'
import reactotron from '../ReactotronConfig'
import Reactotron from 'reactotron-react-native'

const configureStore = (): Store<AppState> => {
    // @ts-ignore
    const sagaMonitor = Reactotron.createSagaMonitor()
    const sagaMiddleware = createSagaMiddleware({sagaMonitor})

    // @ts-ignore
    const store: Store<AppState> = reactotron.createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(rootSaga)

    return store
}

export const store: Store<AppState> = configureStore()