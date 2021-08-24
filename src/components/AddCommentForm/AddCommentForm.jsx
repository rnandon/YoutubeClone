import React, { useState } from 'react';

// This form is for adding new comments
const AddCommentForm = ({ postComment }) => {
    const [newComment, setComment] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newComment);
        postComment(newComment);
        setComment('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
                <input name="newComment" rows="3" cols="50" type="text" placeholder="Add a Comment here" value={newComment}  onChange={(event) => setComment(event.target.value)} />
            <br />

            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddCommentForm;