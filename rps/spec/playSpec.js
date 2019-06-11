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

        it('paper v.s. rock', () => {
            const observer = jasmine.createSpyObj("observer", ["p1Wins"]);

            new Request().play(THROW.PAPER, THROW.ROCK, observer)

            expect(observer.p1Wins).toHaveBeenCalled();
        })

        it('rock v.s. paper', () => {
            const observer = jasmine.createSpyObj("observer", ["p2Wins"]);

            new Request().play(THROW.ROCK, THROW.PAPER, observer)

            expect(observer.p2Wins).toHaveBeenCalled();
        })

        it('scissors v.s. paper', () => {
            const observer = jasmine.createSpyObj("observer", ["p1Wins"]);

            new Request().play(THROW.SCISSORS, THROW.PAPER, observer)

            expect(observer.p1Wins).toHaveBeenCalled();
        })

        it('paper v.s. scissors', () => {
            const observer = jasmine.createSpyObj("observer", ["p2Wins"]);

            new Request().play(THROW.PAPER, THROW.SCISSORS, observer)

            expect(observer.p2Wins).toHaveBeenCalled();
        })
    })

    describe('draw scenarios', () => {
        it('rock v.s. rock', () => {
            const observer = jasmine.createSpyObj("observer", ["draw"]);

            new Request().play(THROW.ROCK, THROW.ROCK, observer)

            expect(observer.draw).toHaveBeenCalled();
        })

        it('paper v.s. paper', () => {
            const observer = jasmine.createSpyObj("observer", ["draw"]);

            new Request().play(THROW.PAPER, THROW.PAPER, observer)

            expect(observer.draw).toHaveBeenCalled();
        })

        it('scissors v.s. scissors', () => {
            const observer = jasmine.createSpyObj("observer", ["draw"]);

            new Request().play(THROW.SCISSORS, THROW.SCISSORS, observer)

            expect(observer.draw).toHaveBeenCalled();
        })
    })

    describe('invalid scenarios', () => {
        it('null v.s. null', () => {
            const observer = jasmine.createSpyObj("observer", ["invalid"]);

            new Request().play(null, null, observer)

            expect(observer.invalid).toHaveBeenCalled();
        })
    })
})