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
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Comment..." value={newComment}  onChange={(event) => setComment(event.target.value)} />
            </div>

            <input type="submit" value="Submit Comment" className="btn btn-secondary" />
        </form>
    )
}

export default AddCommentForm;