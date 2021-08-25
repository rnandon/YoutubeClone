import React from 'react';
import useLikeDislike from '../../hooks/useLikeDislike'
import './Reply.css';

const Reply = (props) => {
    const reply = props.reply; // Pass this into the prop, need contents and data for backend calls
    let {likes, like, dislikes, dislike} = useLikeDislike(reply);

    return (
        <div className="bottom-border">
            <div className="mt-3 mb-3">
                {reply.body}
            </div>
            <div>
                <button onClick={like}  className="btn btn-secondary btn-sm me-3 mb-3"> {likes} Like</button>
                <button onClick={dislike}  className="btn btn-secondary btn-sm mb-3"> {dislikes} Dislike</button>
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