import React, { useState } from 'react';

// This form is for adding new comments
const AddReplyForm = ({ postReply }) => {
    const [newReply, setNewReply] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newReply);
        postReply(newReply);
        setNewReply('');
    }

    return (
        <form onSubmit={handleSubmit} class="ms-4">
            <label>Add a Reply:</label>
            <br />
                <textarea name="newComment" rows="3" cols="50" type="text" value={newReply}  onChange={(event) => setNewReply(event.target.value)} />
            <br />

            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddReplyForm;