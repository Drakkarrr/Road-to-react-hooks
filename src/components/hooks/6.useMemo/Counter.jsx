import React, { useState, useMemo } from 'react'

const Counter = () => {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])


    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }


    return (
        <div>
            <div>
                <button onClick={incrementCounterOne}>Count One: {counterOne}</button>
                {isEven ? <p>Counter One is even</p> : <p>Counter One is odd</p>}
            </div>
            <br />
            <div>
                <button onClick={incrementCounterTwo}>Count Two: {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter