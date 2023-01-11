import React, { useState } from 'react'
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';

const Post = () => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0)

    const nature = 'https://images.unsplash.com/photo-1563166625-b2dffc6efe6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

    const handleLike = () => {
        if (like) {
            setLike(false);
            setCount(count - 1)
        } else {
            setLike(true);
            setCount(count + 1)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} className="App">
            <h2>POST LIKE APP</h2>
            <h3>likes Count {count}</h3>
            <img onDoubleClick={handleLike} style={{ width: '50%', cursor: 'pointer' }} src={nature} alt='nature'></img>
            {like ?
                <AiTwotoneLike color='red' size={50} onClick={handleLike} style={{ cursor: 'pointer' }} /> :
                <AiOutlineLike size={50} onClick={handleLike} style={{ cursor: 'pointer' }} />
            }
        </div>
    )
}

export default Post