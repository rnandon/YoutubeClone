import React, { useState } from 'react';
import axios from 'axios';


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
            async function addLike() {
                //get comment after liked
                let response = await axios.get(`http://127.0.0.1:8000/comment/like/${comment.id}`);

                if (response) {
                    console.log("API Call is Good");
                } else {
                    console.log("API Call FAILED");
                }
            }
            addLike()
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
            async function addDislike() {
                //get comment after disliked
                let response = await axios.get(`http://127.0.0.1:8000/comment/dislike/${comment.id}`);

                if (response) {
                    console.log("API Call is Good");
                } else {
                    console.log("API Call FAILED");
                }
            }
            addDislike()
        }
    }

    return {likes, like, dislikes, dislike};
}

export default useLikeDislike;