import React, { useState } from 'react'

const HookCounterTwo = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input type="text"
                value={name.firstName}
                placeholder="Firstname"
                onChange={e => setName({ ...name, firstName: e.target.value })} />

            <br />

            <input type="text"
                value={name.lastName}
                placeholder="Lastname"
                onChange={e => setName({ ...name, lastName: e.target.value })} />

            <h2>Your firstname is {name.firstName}</h2>
            <h2>Your lastname is {name.lastName}</h2>
        </form>
    )
}

export default HookCounterTwo