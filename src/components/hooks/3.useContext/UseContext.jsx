import React, { useContext } from 'react'
import { FirstNameContext, LastNameContext } from "../../../App";

const UseContext = () => {
    const firstName = useContext(FirstNameContext);
    const lastName = useContext(LastNameContext);

    return (
        <>
            <h2>useContext - Hello i am {firstName} {lastName}</h2>
        </>
    )
}

export default UseContext