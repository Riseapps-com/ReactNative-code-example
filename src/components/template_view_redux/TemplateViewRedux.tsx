import React, {ReactElement} from 'react'
import {connect} from 'react-redux'
import {AppState} from 'react-native'

export type AllProps = Props & PropsFromState & PropsFromDispatch

interface Props {
    componentId?: string
}

interface PropsFromState {
}

interface PropsFromDispatch {
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class TemplateReduxView extends React.Component<AllProps, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        return null
    }
}

// @ts-ignore
const mapStateToProps = (appState: AppState): PropsFromState => {
    return {}
}

const mapDispatchToProps: PropsFromDispatch = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateReduxView)