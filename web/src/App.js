import React from 'react'
import ReactDOM from 'react-dom'
import PlayForm from './PlayForm'
import {Request} from 'rps/src/play'

class App extends React.Component {
    render() {
        return <PlayForm request={new Request()}/>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
)