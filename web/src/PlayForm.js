import React from 'react'

export default class PlayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null,
            rounds: null,
        }
    }

    invalid() {
        this.setState({
            result: 'Invalid Input'
        })
    }

    p1Wins() {
        this.setState({
            result: 'Player 1 Wins!'
        })
    }

    p2Wins() {
        this.setState({
            result: 'Player 2 Wins!'
        })
    }

    tie() {
        this.setState({
            result: 'Draw!'
        })
    }

    onClickSubmit() {
        this.props.request.play(
            this.state.player1Input,
            this.state.player2Input,
            this)
    }

    onChangePlayer1Input(event) {
        this.setState({
            player1Input: event.target.value
        });
    }

    onChangePlayer2Input(event) {
        this.setState({
            player2Input: event.target.value
        });
    }

    onHistoryClick() {
        this.props.request.getHistory(this)
    }

    noRounds() {
        this.setState({rounds: []})
    }

    displayRounds() {
        if (this.state.rounds === null) {
            return
        }

        if(this.state.rounds.length === 0) {
            return <p>no rounds played</p>
        }
    }

    render() {
        return (
            <div>
                <h1>RPS App</h1>

                <input name='player1'
                       onChange={this.onChangePlayer1Input.bind(this)}/>
                <input name='player2'
                       onChange={this.onChangePlayer2Input.bind(this)}/>
                <button name="play" onClick={this.onClickSubmit.bind(this)}>登録</button>
                <div>{this.state.result}</div>
                <div>
                    <button name="history" onClick={this.onHistoryClick.bind(this)}>History</button>
                    <br/>
                    {this.displayRounds()}
                </div>
            </div>
        )
    }
}
