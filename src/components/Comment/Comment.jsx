import React, { useState } from 'react';
import Likes from '../Likes/Likes';
//import useLikeDislike from '../../hooks/useLikeDislike'

const Comment = (props) => {
    const comments = props.comments;
    // iterate through comments to display them below video
    const videoComments = comments.map((comment) => {
        const commentInfo = {
            body: comment.body,
            likes: comment.likes,
            dislikes: comment.dislikes,
            id: comment.id,
        };
        return (
                <li>
                    Comment:<br/>
                        {commentInfo.body}<br/>
                    <Likes commentInfo={commentInfo} />
                    <button>Dislikes: {commentInfo.dislikes}</button>
                </li>
        )
    })

    return (
        <div>
            <h3>Video Comments</h3>
                <ul>
                    {videoComments}
                </ul>
        </div>
    )
}

    //const replies = []; // Get replies from our backend
    // Map over replies and build array of reply objects

    // Once account info is built, this will need to be accessed here to control the like/comment/dislike functions
    // For now, we'll just use state
    //let {likes, like, dislikes, dislike} = useLikeDislike(comments);



    /*
    layout concept:
    Comment author on left
    Commment body next to that
    likes and dislikes (w/ buttons) below
    replies next to likes and dislikes

    */

    // return (
    //     <div>
    //         <div>
    //             {/* {comment.author} */}
    //         </div>
    //         <div>
    //             {commentInfo.body}
    //         </div>
    //         <div>
    //             {/* <button onClick={like}> {likes} Like </button>
    //             <button onClick={dislike}> {dislikes} Dislike </button> */}
    //         </div>
    //         <div>
    //             {/* {replies[0]} */}
    //         </div>
    //     </div>
    // ) 


export default Comment;