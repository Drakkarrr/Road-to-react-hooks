import { useEffect } from 'react'

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Counter ${count}`
    }, [count])
}

export default useDocumentTitle