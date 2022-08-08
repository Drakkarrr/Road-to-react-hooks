
const Greet = ({ firstName, lastName, children }) => {
    return (
        <>
            <div>Hello {firstName} {lastName} </div>
            {children}
        </>
    )
}

export default Greet