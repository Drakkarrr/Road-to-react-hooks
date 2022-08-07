import React from 'react'

const UserGreeting = () => {
    const isLoggedIn = false;
    return (
        <div>Welcome {isLoggedIn && 'Drakkar'} </div>
    )
}

export default UserGreeting