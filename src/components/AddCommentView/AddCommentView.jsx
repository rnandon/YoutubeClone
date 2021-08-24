import React, { useState } from 'react';

import AddCommentForm from '../AddCommentForm/AddCommentForm';
import addComment from '../../hooks/addComment';

// used to display addcomment form then send it to comment for display
const AddComment = (props) => {
    // store videoid
    const videoId = props.videoId;

    const [newComment, setComment] = useState([]);

    // sets new comment after form is filled out
    const postComment = (newComment) => {
        setComment(newComment);
        
        // create the new comment to be posted on the backend
        const commentInfo = {
            body: newComment,
        }
        addComment(`http://127.0.0.1:8000/video/${videoId}`, commentInfo);
    }

    



    return (
        <div>
            
            <p>A Comment:  {newComment}</p>
            <AddCommentForm postComment={postComment} />
        </div>
    );
}

export default AddComment;