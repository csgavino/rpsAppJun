import ReactDOM from 'react-dom'
import React from 'react'
import PlayForm from '../src/PlayForm'
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

            document.querySelector('button').click()

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

            document.querySelector('button').click()

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

            document.querySelector('button').click()

            expect(domFixture.innerText).toContain('Player 2 Wins!')
        })

        it('displays Draw', () => {
            const requestStub = {
                play: (p1, p2, observer) => {
                    observer.tie()
                }
            }

            ReactDOM.render(
                <PlayForm request={requestStub}/>,
                domFixture
            )

            expect(domFixture.innerText).not.toContain('Draw!')

            document.querySelector('button').click()

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

            document.querySelector('button').click();

            expect(playSpy).toHaveBeenCalledWith(
                'player1Hand',
                'player2Hand',
                jasmine.any(Object)
            )
        })
    })
})
