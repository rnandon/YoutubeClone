import React, { useState } from 'react';
import useLikeDislike from '../../hooks/useLikeDislike'

const Likes = (props) => {
    const commentInfo = props.commentInfo;
    // store number of likes

    console.log("comment id: " + commentInfo.id);

    let {likes, like, dislikes, dislike} = useLikeDislike(commentInfo);

    return (
        <div>
            <button onClick={like} className="btn btn-secondary btn-sm">Likes {likes}</button>
            <button onClick={dislike} className="btn btn-secondary btn-sm">Dislikes {dislikes}</button>
        </div>
    )
}

export default Likes;