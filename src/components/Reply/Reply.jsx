import React from 'react';
import useLikeDislike from '../../hooks/useLikeDislike'

export default Reply = (props) => {
    const reply = ""; // Pass this into the prop, need contents and data for backend calls
    let {likes, like, dislikes, dislike} = useLikeDislike(reply);

    return (
        <div>
            <div>
                {reply.author}
            </div>
            <div>
                {reply.body}
            </div>
            <div>
                <button onClick={like} > {likes} Like</button>
                <button onClick={dislike} > {dislikes} Dislike</button>
            </div>
        </div>
    )
}