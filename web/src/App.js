import React from 'react'
import ReactDOM from 'react-dom'
import PlayForm from './PlayForm'

class App extends React.Component {
  render(){
    return <PlayForm />
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
)