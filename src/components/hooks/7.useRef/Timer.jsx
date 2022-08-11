import React, { useState, useEffect, useRef } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            <h1>Timeee: {timer}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
        </div>
    )
}

export default Timer