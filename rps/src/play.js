const THROW = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

class Request {
    play(p1, p2, observer) {
        if (p1 === p2) {
            observer.draw()
            return
        }

        if (p1 === THROW.ROCK && p2 === THROW.SCISSORS ||
            p1 === THROW.PAPER && p2 === THROW.ROCK ||
            p1 === THROW.SCISSORS && p2 === THROW.PAPER) {
            observer.p1Wins()
            return
        }

        observer.p2Wins()
    }
}

module.exports = {Request, THROW}
