import React, { useState } from 'react';
import Likes from '../Likes/Likes';
import Reply from '../Reply/Reply';
import AddReplyView from '../AddReplyView/AddReplyView';


const Comment = (props) => {
    const comments = props.comments;

    let parentComments = {};
    let baseComments = [];

    debugger;

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


    // iterate through replies and comments to display them below video
    const videoComments = baseComments.map((comment) => {
        let replies = [];

        if (parentComments[`${comment.id}`]) {
            replies = parentComments[`${comment.id}`].map((reply) => {
                const replyInfo = {
                    body: reply.body,
                    likes: reply.likes,
                    dislikes: reply.dislikes,
                    id: reply.id,
                };

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
            <div>
                <p>{commentInfo.body}</p>
                <Likes commentInfo={commentInfo} />
                <p class="ms-5">{replies}</p>
                <AddReplyView commentInfo={commentInfo} />
            </div>
        )
    })

    return (
        <div>
            <h3>Video Comments</h3>
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