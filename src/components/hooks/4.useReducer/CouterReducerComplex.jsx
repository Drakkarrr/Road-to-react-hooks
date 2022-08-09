import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }

        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }

        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }

        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }

        case 'reset':
            return initialState

        default:
            return state
    }
}

const CouterReducerComplex = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h1>Counter 1: {count.firstCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>

            <br />
            <br />

            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>

            <br />
            <br />

            <h1>Counter 2: {count.secondCounter}</h1>
            <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>Increment by 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 2 })}>Decrement by 2</button>

            <br />
            <br />

            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    )
}

export default CouterReducerComplex