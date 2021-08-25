import React, { useState } from 'react';

import AddReplyForm from '../AddReplyForm/AddReplyForm';
import addComment from '../../hooks/addComment';

// used to display addcomment form then send it to comment for display
const AddReplyView = (props) => {
    // get comment info that was passed in
    const commentInfo = props.commentInfo;

    const videoId = commentInfo.videoId;

    const [newReply, setNewReply] = useState([]);

    // sets new comment after form is filled out
    const postReply = (newReply) => {
        setNewReply(newReply);
        
        // create the new comment to be posted on the backend
        const replyInfo = {
            body: newReply,
            parentComment: commentInfo.id,
            videoId: commentInfo.videoId,
        }
        addComment(`http://127.0.0.1:8000/video/${videoId}`, replyInfo);
    }

    return (
        <div class="ms-4">
            <AddReplyForm postReply={postReply} />
        </div>
    );
}

export default AddReplyView;