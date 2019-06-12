import React from 'react'
import ReactDOM from 'react-dom'
import PlayForm from './PlayForm'
import {Request} from 'rps/src/play'
import FakeRoundRepository from 'rps/src/InMemoryRoundRepository'

const repo = new FakeRoundRepository()

class App extends React.Component {
    render() {
        return <PlayForm request={new Request(repo)}/>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
)