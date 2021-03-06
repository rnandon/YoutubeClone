import React, { useState } from 'react';
import Likes from '../Likes/Likes';
import Reply from '../Reply/Reply';
import AddReplyView from '../AddReplyView/AddReplyView';
import './Comment.css';


const Comment = (props) => {
    const comments = props.comments;

    let parentComments = {};
    let baseComments = [];

    // check to see if comment is a parent comment, if not add it to baseComments
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].parentComment) {
            if (!parentComments[`${comments[i].parentComment}`]) {
                parentComments[`${comments[i].parentComment}`] = [];
            } 
              parentComments[`${comments[i].parentComment}`].push(comments[i]);
        } else {
            baseComments.push(comments[i]);
        }
    }
    debugger;


    // iterate through replies and comments to display them below video
    const videoComments = baseComments.map((comment) => {
        let replies = [];

        if (parentComments[`${comment.id}`]) {
            replies = parentComments[`${comment.id}`].map((reply) => {

                return (
                    // display replies
                    <Reply reply={reply} />
                )
            })
        }

        const commentInfo = {
            body: comment.body,
            likes: comment.likes,
            dislikes: comment.dislikes,
            id: comment.id,
            videoId: comment.videoId,
        };

        // display like/dislike buttons
        return (
            <div className="bottom-border">
                <div className="mt-3">
                    <p className="mb-3" >{commentInfo.body}</p>
                    <Likes commentInfo={commentInfo} />
                </div>
                <div className="m-1">
                    <p class="ms-5">{replies}</p>
                    <AddReplyView commentInfo={commentInfo} postComment={props.postComment} />
                </div>
            </div>
        )
    })

    return (
        <div>
                {videoComments}
        </div>
    )
}

    //const replies = []; // Get replies from our backend
    // Map over replies and build array of reply objects

    // Once account info is built, this will need to be accessed here to control the like/comment/dislike functions
    // For now, we'll just use state
    //let {likes, like, dislikes, dislike} = useLikeDislike(comments);

export default Comment;