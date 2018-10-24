import {applyMiddleware, createStore, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './rootSaga'
import {AppState, rootReducer} from './rootReducer'
// @ts-ignore
import logger from 'redux-logger'

const configureStore = (): Store<AppState> => {
    const sagaMiddleware = createSagaMiddleware()

    const store: Store<AppState> = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware, logger)
    )
    sagaMiddleware.run(rootSaga)

    return store
}

export const store: Store<AppState> = configureStore()