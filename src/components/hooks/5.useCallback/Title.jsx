import React from 'react'

const Title = () => {
    console.log('Rendering title...');
    return (
        <div>Hello Title!</div>
    )
}

export default React.memo(Title)