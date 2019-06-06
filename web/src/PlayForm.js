import React from 'react'

export default class PlayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null
        }
    }

    onClickSubmit() {
        this.setState({
            result: "NOT IMPLEMENTED"
        })
    }

    render() {
        return (
            <div>
                <h1>RPS App</h1>
                <input name='player1' />
                <input name='player2' />
                <button onClick={this.onClickSubmit.bind(this)}>登録</button>
                <div>{this.state.result}</div>
            </div>
        )
    }
}
