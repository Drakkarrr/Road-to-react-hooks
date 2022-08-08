import React, { useState, useEffect } from 'react'

export const MouseEvent = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMouseMove = e => {
        // console.log('Mouse event...');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        // console.log('useEffect is called...');
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            // console.log('useEffect is unmounted...');
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            <h1>X: {x} </h1>
            <h1>Y: {y} </h1>
        </>
    )
}