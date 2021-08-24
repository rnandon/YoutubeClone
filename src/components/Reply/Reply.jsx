import React from 'react';
import useLikeDislike from '../../hooks/useLikeDislike'

const Reply = (props) => {
    const reply = props.reply; // Pass this into the prop, need contents and data for backend calls
    let {likes, like, dislikes, dislike} = useLikeDislike(reply);

    return (
        <div>
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

// Algorithm
// need parent comment id
// call add comment form and view
    // store the comment and send it to back end
// only thing different - posting  to backend need parent id

// extract replies 
// display comment once complete?

export default Reply;