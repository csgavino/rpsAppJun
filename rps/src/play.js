const THROW = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
const THROWS = [THROW.ROCK, THROW.PAPER, THROW.SCISSORS]

function PlayRequest(p1, p2, observer) {
    this.process = () => {
        if (anyThrowInvalid()) {
            observer.invalid()
        } else if (isDraw()) {
            observer.draw()
        } else if (p1Wins()) {
            observer.p1Wins()
        } else {
            observer.p2Wins()
        }

        function p1Wins() {
            return p1 === THROW.ROCK && p2 === THROW.SCISSORS ||
                p1 === THROW.PAPER && p2 === THROW.ROCK ||
                p1 === THROW.SCISSORS && p2 === THROW.PAPER
        }

        function isDraw() {
            return p1 === p2
        }

        function anyThrowInvalid() {
            return THROWS.includes(p1) === false ||
                THROWS.includes(p2) === false
        }
    }
}

class Request {
    play(p1, p2, observer) {
        new PlayRequest(p1, p2, observer).process()
    }
}

module.exports = {Request, THROW}
