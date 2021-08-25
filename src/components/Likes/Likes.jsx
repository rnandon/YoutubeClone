import React, { useState } from 'react';
import useLikeDislike from '../../hooks/useLikeDislike'

const Likes = (props) => {
    const commentInfo = props.commentInfo;
    // store number of likes

    console.log("comment id: " + commentInfo.id);

    let {likes, like, dislikes, dislike} = useLikeDislike(commentInfo);

    return (
        <div class="mb-3">
            <button onClick={like} className="btn btn-secondary btn-sm me-3 mb-3">Likes {likes}</button>
            <button onClick={dislike} className="btn btn-secondary btn-sm mb-3">Dislikes {dislikes}</button>
            <p class="ms-5">Replies:</p>
        </div>
    )
}

export default Likes;