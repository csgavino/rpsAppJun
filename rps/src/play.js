const THROW = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

class Request {
    play(p1, p2, observer) {
        if (p1 === THROW.ROCK) {
            observer.p1Wins()
            return
        }

        observer.p2Wins()
    }
}

module.exports = {Request, THROW}
