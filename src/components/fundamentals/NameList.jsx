import React from 'react'

const NameList = () => {
    const names = ['Drakkar', 'Junrey', 'Ondong']
    return (
        <>
            <h1>List of names</h1>
            {names.map(name => <li key={name}>{name}</li>)}
        </>
    )
}

export default NameList