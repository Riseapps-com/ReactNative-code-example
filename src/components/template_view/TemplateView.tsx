import React, {ReactElement} from 'react'

export interface Props {
}

interface State {
}

const initialState: State = {}
const defaultProps: Props = {}

class TemplateView extends React.Component<Props, State> {
    readonly state: State = initialState
    static defaultProps: Props = defaultProps

    render(): ReactElement<any> {
        return null
    }
}

export default TemplateView