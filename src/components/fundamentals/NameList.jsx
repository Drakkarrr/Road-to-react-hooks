import React from 'react'

const NameList = () => {
    const names = ['Drakkar', 'Junrey', 'Heart']
    return (
        <>
            <h1>List</h1>
            {names.map(name => <li key={name}>{name}</li>)}
        </>
    )
}

export default NameList