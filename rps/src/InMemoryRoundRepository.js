class InMemoryRoundRepository {
    constructor() {
        this.rounds = []
    }

    isEmpty() {
        return this.rounds.length === 0
    }

    save(round) {
        this.rounds.push(round)
    }

    get() {
        return [...this.rounds]
    }
}

module.exports = InMemoryRoundRepository;
