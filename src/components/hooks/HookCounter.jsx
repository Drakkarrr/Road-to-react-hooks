import React, { useState } from 'react'

export const HookCounter = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <>
            <div>You clicked {count} times</div>

            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={incrementFive}>+5</button>
        </>
    )
}
