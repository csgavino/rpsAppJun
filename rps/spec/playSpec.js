const {Request, THROW, Round, RESULT} = require('../src/play')

describe('play function', () => {
    let request;

    describe("save scenarios", () => {
        let repoSpy = jasmine.createSpyObj('repo', ['save'])
        beforeEach(() => {
            request = new Request(repoSpy);
        })

        it("saves when p1 wins", () => {
            request.play(THROW.ROCK, THROW.SCISSORS, {p1Wins: () => {}})

            expect(repoSpy.save).toHaveBeenCalledWith(new Round(THROW.ROCK, THROW.SCISSORS, RESULT.P1WINS));
        })

        it("saves when p2 wins", () => {
            request.play(THROW.SCISSORS, THROW.ROCK, {p2Wins: () => {}})

            expect(repoSpy.save).toHaveBeenCalledWith(new Round(THROW.SCISSORS, THROW.ROCK, RESULT.P2WINS));
        })

        it("saves when draw", () => {
            request.play(THROW.ROCK, THROW.ROCK, {draw: () => {}})

            expect(repoSpy.save).toHaveBeenCalledWith(new Round(THROW.ROCK, THROW.ROCK, RESULT.DRAW));
        })
    })

    describe('win scenarios', () => {
        beforeEach(() => {
            request = new Request({save: () => {}});
        })

        it('rock v.s. scissors', () => {
            const observer = jasmine.createSpyObj("observer", ["p1Wins"]);

            request.play(THROW.ROCK, THROW.SCISSORS, observer)

            expect(observer.p1Wins).toHaveBeenCalled();
        })

        it('scissors v.s. rock', () => {
            const observer = jasmine.createSpyObj("observer", ["p2Wins"]);

            request.play(THROW.SCISSORS, THROW.ROCK, observer)

            expect(observer.p2Wins).toHaveBeenCalled();
        })

        it('paper v.s. rock', () => {
            const observer = jasmine.createSpyObj("observer", ["p1Wins"]);

            request.play(THROW.PAPER, THROW.ROCK, observer)

            expect(observer.p1Wins).toHaveBeenCalled();
        })

        it('rock v.s. paper', () => {
            const observer = jasmine.createSpyObj("observer", ["p2Wins"]);

            request.play(THROW.ROCK, THROW.PAPER, observer)

            expect(observer.p2Wins).toHaveBeenCalled();
        })

        it('scissors v.s. paper', () => {
            const observer = jasmine.createSpyObj("observer", ["p1Wins"]);

            request.play(THROW.SCISSORS, THROW.PAPER, observer)

            expect(observer.p1Wins).toHaveBeenCalled();
        })

        it('paper v.s. scissors', () => {
            const observer = jasmine.createSpyObj("observer", ["p2Wins"]);

            request.play(THROW.PAPER, THROW.SCISSORS, observer)

            expect(observer.p2Wins).toHaveBeenCalled();
        })
    })

    describe('draw scenarios', () => {
        beforeEach(() => {
            request = new Request({save: () => {}});
        })

        it('rock v.s. rock', () => {
            const observer = jasmine.createSpyObj("observer", ["draw"]);

            request.play(THROW.ROCK, THROW.ROCK, observer)

            expect(observer.draw).toHaveBeenCalled();
        })

        it('paper v.s. paper', () => {
            const observer = jasmine.createSpyObj("observer", ["draw"]);

            request.play(THROW.PAPER, THROW.PAPER, observer)

            expect(observer.draw).toHaveBeenCalled();
        })

        it('scissors v.s. scissors', () => {
            const observer = jasmine.createSpyObj("observer", ["draw"]);

            request.play(THROW.SCISSORS, THROW.SCISSORS, observer)

            expect(observer.draw).toHaveBeenCalled();
        })
    })

    describe('invalid scenarios', () => {
        beforeEach(() => {
            request = new Request();
        })

        it('null v.s. null', () => {
            const observer = jasmine.createSpyObj("observer", ["invalid"]);

            request.play(null, null, observer)

            expect(observer.invalid).toHaveBeenCalled();
        })

        it('null v.s. invalid', () => {
            const observer = jasmine.createSpyObj("observer", ["invalid"]);

            request.play(null, Math.random(), observer)

            expect(observer.invalid).toHaveBeenCalled();
        })

        it('invalid v.s. null', () => {
            const observer = jasmine.createSpyObj("observer", ["invalid"]);

            request.play(Math.random(), null, observer)

            expect(observer.invalid).toHaveBeenCalled();
        })

        it('invalid v.s. invalid', () => {
            const observer = jasmine.createSpyObj("observer", ["invalid"]);

            request.play(Math.random(), Math.random(), observer)

            expect(observer.invalid).toHaveBeenCalled();
        })
    })
})