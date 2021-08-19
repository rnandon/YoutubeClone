import React from 'react';

export default Comments = (props) => {
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