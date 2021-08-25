import React, { useState } from 'react';

// This form is for adding new comments
const AddReplyForm = ({ postReply }) => {
    const [newReply, setNewReply] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newReply);
        postReply(newReply);
        setNewReply('');
    }

    return (
        <form onSubmit={handleSubmit} class="ms-4">
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Reply..." value={newReply}  onChange={(event) => setNewReply(event.target.value)} />
            </div>

            <input type="submit" value="Submit Reply" className="btn btn-secondary" />
        </form>
    )
}

export default AddReplyForm;