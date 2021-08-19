import React from 'react';

const VideoInfo = (props) => {
    /*
    layout concept:
    creator on left
    description next to that
    */
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.creator}</h2>
            <h4>{props.description}</h4>
        </div>
    )
}

export default VideoInfo;