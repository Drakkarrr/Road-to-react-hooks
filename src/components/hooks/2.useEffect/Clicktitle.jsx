import React, { useState, useEffect } from 'react'

const Clicktitle = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `${name} You clicked ${count} times!`
        // console.log(`Updating...`);
    }, [count])


    return (
        <>
            <input type="text" value={name} placeholder="name" onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>You clicked {count} times</button>
        </>
    )
}

export default Clicktitle