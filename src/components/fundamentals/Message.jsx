import React, { useState } from 'react'

const Message = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)} >+ ADD</button>
            <button onClick={() => setCount(count - 1)} >- Subtract</button>
        </>
    )
}

export default Message