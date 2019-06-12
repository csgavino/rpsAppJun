const THROW = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
const THROWS = [THROW.ROCK, THROW.PAPER, THROW.SCISSORS]

const RESULT = {
    P1WINS: 'p1Wins',
    P2WINS: 'p2Wins',
    DRAW: 'draw'
}

function PlayRequest(p1, p2, observer, repo) {
    this.process = () => {
        if (anyThrowInvalid()) {
            observer.invalid()
        } else if (isDraw()) {
            repo.save(new Round(p1, p2, RESULT.DRAW))
            observer.draw()
        } else if (p1Wins()) {
            repo.save(new Round(p1, p2, RESULT.P1WINS))
            observer.p1Wins()
        } else {
            repo.save(new Round(p1, p2, RESULT.P2WINS))
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
    constructor(repo) {
        this.repo = repo
    }

    play(p1, p2, observer) {
        new PlayRequest(p1, p2, observer, this.repo).process()
    }

    getHistory(observer) {
        if(this.repo.isEmpty()) {
            observer.noRounds()
        } else {
            observer.rounds(this.repo.get())
        }
    }
}

class Round {
    constructor(p1, p2, result) {
        this.p1 = p1
        this.p2 = p2
        this.result = result
    }
}

module.exports = {Request, THROW, Round, RESULT}
