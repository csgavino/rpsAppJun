const {Request, THROW} = require('../src/play')

describe('play function', () => {
    beforeEach(() => {
    })

    describe('win scenarios', () => {
        it('rock v.s. scissors', () => {
            const observer = jasmine.createSpyObj("observer", ["p1Wins"]);

            new Request().play(THROW.ROCK, THROW.SCISSORS, observer)

            expect(observer.p1Wins).toHaveBeenCalled();
        })

        it('scissors v.s. rock', () => {
            const observer = jasmine.createSpyObj("observer", ["p2Wins"]);

            new Request().play(THROW.SCISSORS, THROW.ROCK, observer)

            expect(observer.p2Wins).toHaveBeenCalled();
        })
    })
})