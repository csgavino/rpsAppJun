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

    it('displays title', () => {
        ReactDOM.render(
            <PlayForm />,
            domFixture,
        )

        expect(domFixture.innerText).toContain('RPS App')
    })

    describe('PlayForm', () => {
        it('displays Player 1 Wins if Requests calls p1_wins', () => {
            ReactDOM.render(
                <PlayForm/>,
                domFixture,
            )

            const input1 = document.querySelector('input[name="player1"]')
            input1.value = 'rock'
            ReactTestUtils.Simulate.change(input1)

            const input2 = document.querySelector('input[name="player2"]')
            input2.value = 'paper'
            ReactTestUtils.Simulate.change(input2)

            document.querySelector('button').click()

            expect(domFixture.innerText).toContain('NOT IMPLEMENTED')
        })
    })
})
