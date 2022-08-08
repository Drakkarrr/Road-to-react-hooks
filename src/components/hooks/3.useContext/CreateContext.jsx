import React from 'react'
import { FirstNameContext, LastNameContext } from "../../../App";

const GrandChild = () => {
    return (
        <>
            <FirstNameContext.Consumer>
                {
                    firstName => {
                        return <LastNameContext.Consumer>
                            {
                                lastName => {
                                    return <h2>Create context - Hello i am {firstName} {lastName}</h2>
                                }
                            }
                        </LastNameContext.Consumer>
                    }
                }
            </FirstNameContext.Consumer>
        </>
    )
}

export default GrandChild