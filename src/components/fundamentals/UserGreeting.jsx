import React, { useState } from 'react'

const UserGreeting = () => {
    const [buttonText, setButtonText] = useState('Sign in')
    const [isLoggedIn, setIsLoggedin] = useState(false)


    const logHandler = () => {
        setButtonText(buttonText === 'Sign in' ? 'Sign out' : 'Sign in')
        setIsLoggedin(!isLoggedIn)
    }

    return (
        <>
            <button onClick={logHandler}>{buttonText}</button>
            <div>Nullish coalescing - Welcome... {isLoggedIn && 'Drakkar!'} </div>
            <div>Ternary operator - Welcome... {isLoggedIn ? 'Junrey!' : 'Guest'} </div>
        </>
    )
}

export default UserGreeting