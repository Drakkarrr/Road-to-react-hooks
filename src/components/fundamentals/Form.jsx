import React, { useState } from 'react'

const Form = () => {
    const [userName, setuserName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello ${userName}`)
        setuserName('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Forms</h1>
                <label>Username</label>
                <input type="text" placeholder='Username' value={userName} onChange={(event) => setuserName(event.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Form