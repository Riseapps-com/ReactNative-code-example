import React, {ReactElement} from 'react'
import {Navigation, Options} from 'react-native-navigation'
import {connect} from 'react-redux'
import {PRIMARY_COLOR} from '../../appConstants'
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

class TemplateScreenRedux extends React.Component<AllProps, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    static options(): Options {
        return {
            layout: {
                backgroundColor: PRIMARY_COLOR,
                orientation: ['portrait']
            },
            topBar: {
                visible: false,
                drawBehind: true
            }
        }
    }

    render(): ReactElement<any> {
        return null
    }

    handleBackPress = (): void => {
        Navigation.pop(this.props.componentId)
            .catch()
    }
}

// @ts-ignore
const mapStateToProps = (appState: AppState): PropsFromState => {
    return {}
}

const mapDispatchToProps: PropsFromDispatch = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateScreenRedux)