import React from 'react';

const Comments = (props) => {
    const videoId = props.videoId;
    let comments = ""; // get comments from backend passing in videoId
    // map over comments, get an array of comment components (if there are some)
    // display comments sorted by likes

    return (
        <div>
            {comments}
        </div>
    )
}

export default Comments;