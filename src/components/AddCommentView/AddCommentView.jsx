import React, { useState } from 'react';
import AddCommentForm from '../AddCommentForm/AddCommentForm';

// used to display addcomment form then send it to comment for display
const AddComment = () => {
    const [newComment, setComment] = useState('This is a comment');

    // sets new comment after form is filled out
    const getCommentForm = (newComment) => {
        setComment(newComment);
    }
    return (
        <div>
            
            <p>A Comment:  {newComment}</p>
            <AddCommentForm getCommentForm={getCommentForm} />
        </div>
    );
}

export default AddComment;