import React, { useState } from 'react'

const HookCounterList = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    const deleteItem = () => {
        setItems(items.filter(item => item.id !== items.length - 1))
    }

    return (
        <>
            <button onClick={addItem}>Add a number</button>
            <button onClick={deleteItem}>Delete a number</button>
            <div className="item-container">
                <ul>
                    {
                        items.map(item => <li key={item.id}>{item.value}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default HookCounterList