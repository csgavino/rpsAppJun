import ReactDOM from 'react-dom'
import React from 'react'
import PlayForm from '../src/PlayForm'
import {Round} from '../../rps/src/play'
import ReactTestUtils from 'react-dom/test-utils'

describe('WebSpec', function () {
    let domFixture

    beforeEach(() => {
        domFixture = document.createElement('div')
        document.querySelector('body').appendChild(domFixture)
    })

    afterEach(() => {
        domFixture.remove()
    })

    describe('PlayForm', () => {
        describe('playing a round', () => {
            it('displays Invalid Input when input is invalid', () => {
                const requestStub = {
                    play: (p1, p2, observer) => {
                        observer.invalid()
                    }
                }

                ReactDOM.render(
                    <PlayForm request={requestStub}/>,
                    domFixture
                )

                expect(domFixture.innerText).not.toContain('Invalid Input')

                document.querySelector('button[name="play"]').click()

                expect(domFixture.innerText).toContain('Invalid Input')
            })

            it('displays Player 1 Wins', () => {
                const requestStub = {
                    play: (p1, p2, observer) => {
                        observer.p1Wins()
                    }
                }

                ReactDOM.render(
                    <PlayForm request={requestStub}/>,
                    domFixture
                )

                expect(domFixture.innerText).not.toContain('Player 1 Wins!')

                document.querySelector('button[name="play"]').click()

                expect(domFixture.innerText).toContain('Player 1 Wins!')
            })

            it('displays Player 2 Wins', () => {
                const requestStub = {
                    play: (p1, p2, observer) => {
                        observer.p2Wins()
                    }
                }

                ReactDOM.render(
                    <PlayForm request={requestStub}/>,
                    domFixture
                )

                expect(domFixture.innerText).not.toContain('Player 2 Wins!')

                document.querySelector('button[name="play"]').click()

                expect(domFixture.innerText).toContain('Player 2 Wins!')
            })

            it('displays Draw', () => {
                const requestStub = {
                    play: (p1, p2, observer) => {
                        observer.draw()
                    }
                }

                ReactDOM.render(
                    <PlayForm request={requestStub}/>,
                    domFixture
                )

                expect(domFixture.innerText).not.toContain('Draw!')

                document.querySelector('button[name="play"]').click()

                expect(domFixture.innerText).toContain('Draw!')
            })

            it('calls Play with input text', () => {
                let playSpy = jasmine.createSpy('playSpy');
                const requests = {
                    play: playSpy
                };

                ReactDOM.render(
                    <PlayForm request={requests}/>,
                    domFixture
                );

                const input1 = document.querySelector(
                    'input[name="player1"]'
                );

                const input2 = document.querySelector(
                    'input[name="player2"]'
                );

                input1.value = 'player1Hand';
                ReactTestUtils.Simulate.change(input1);

                input2.value = 'player2Hand';
                ReactTestUtils.Simulate.change(input2);

                document.querySelector('button[name="play"]').click();

                expect(playSpy).toHaveBeenCalledWith(
                    'player1Hand',
                    'player2Hand',
                    jasmine.any(Object)
                )
            })
        })

        describe('history', () => {
            describe('getting history', () => {
                it('calls request get method when history button clicked', () => {
                    let requestSpy = jasmine.createSpyObj('request', ['getHistory']);


                    ReactDOM.render(
                        <PlayForm request={requestSpy}/>,
                        domFixture
                    );
                    document
                        .querySelector('button[name="history"]')
                        .click();


                    expect(requestSpy.getHistory).toHaveBeenCalledWith(jasmine.any(Object))
                });


                it('no message is displayed before history button is clicked', () => {
                    ReactDOM.render(<PlayForm/>, domFixture);


                    expect(domFixture.innerText).not.toContain('No Rounds')
                });
            })

            describe('without rounds', () => {
                it('no rounds is displayed when no rounds played', () => {
                    const requestStub = {
                        getHistory: (observer) => {
                            observer.noRounds()
                        }
                    }


                    ReactDOM.render(
                        <PlayForm request={requestStub}/>,
                        domFixture
                    );
                    document
                        .querySelector('button[name="history"]')
                        .click();


                    expect(domFixture.innerText).toContain('no rounds played')
                });
            });

            describe('with rounds', () => {
                it('when rounds have been played display rounds', () => {
                    const requestStub = {
                        getHistory: (observer) => {
                            observer.rounds([
                                new Round('rock', 'paper', 'p2Wins'),
                                new Round('scissors', 'paper', 'p1Wins'),
                                new Round('paper', 'paper', 'draw'),
                            ])
                        }
                    }


                    ReactDOM.render(
                        <PlayForm request={requestStub}/>,
                        domFixture
                    );
                    document
                        .querySelector('button[name="history"]')
                        .click();


                    expect(domFixture.innerText).toContain('Rock Paper Player 2 Wins')
                    expect(domFixture.innerText).toContain('Scissors Paper Player 1 Wins')
                    expect(domFixture.innerText).toContain('Paper Paper Draw')
                })
            })
        })
    })
})
