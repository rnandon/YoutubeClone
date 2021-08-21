import React, { useState } from 'react';


const useLikeDislike = (comment) => {
    let [likes, setLikes] = useState(comment.likes);
    let [liked, setLiked] = useState(false);
    let [dislikes, setDislikes] = useState(comment.dislikes);
    let [disliked, setDisliked] = useState(false);

    const like = () => {
        if (!liked) {
            setLiked(true);
            setLikes(likes + 1)
            if (disliked) {
                setDisliked(false);
                setDislikes(dislikes - 1);
            }
            // Send reply to backend
        }
    }

    const dislike = () => {
        if (!disliked) {
            setDisliked(true);
            setDislikes(dislikes + 1);
            if (liked) {
                setLiked(false);
                setLikes(likes - 1);
            }
            // send reply to backend
        }
    }

    return {likes, like, dislikes, dislike};
}

export default useLikeDislike;