import axios from 'axios'
import React, { useState, useEffect } from 'react'

const FetchDataButton = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFetch, setIdFetch] = useState(id)

    const fetchHandler = () => setIdFetch(id)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFetch}`)
            .then(res => {
                setPost(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [idFetch])

    return (
        <>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={fetchHandler}>Fetch post</button>
            <p>{post.title}</p>
        </>
    )
}

export default FetchDataButton