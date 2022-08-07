
const Greet = ({ name, lastName, children }) => {
    return (
        <>
            <div>Hello {name} {lastName} </div>
            {children}
        </>
    )
}

export default Greet