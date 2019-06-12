const InMemoryRoundRepository  = require('../src/InMemoryRoundRepository')
const {Round} = require('../src/play')

describe('fake repo', () => {
    describe("when empty", () => {
        it("is empty is true", () => {
            const repo = new InMemoryRoundRepository();

            expect(repo.isEmpty()).toBe(true);
        })

        it("get rounds is empty", () => {
            const repo = new InMemoryRoundRepository();

            expect(repo.get()).toEqual([]);
        })
    })

    describe("when rounds available", () => {
        it("is empty is false", () => {
            const repo = new InMemoryRoundRepository();

            repo.save(new Round('rock', 'paper', 'p2Wins'))

            expect(repo.isEmpty()).toBe(false);
        })

        it("when rounds, get returns rounds", () => {
            const repo = new InMemoryRoundRepository();
            const round = new Round('rock', 'paper', 'p2Wins')

            repo.save(round)

            expect(repo.get()).toEqual([round]);
        })

        it("returns copy of rounds", () => {
            const repo = new InMemoryRoundRepository();
            const round = new Round('rock', 'paper', 'p2Wins')

            repo.save(round)

            const result = repo.get()
            expect(result).toEqual([round]);
            result.push(round)
            expect(repo.get()).toEqual([round]);
        })
    })
});