import React from 'react';

const VideoInfo = (props) => {
    let videoInfo = props.videoInfo
    //debugger;
    /*
    layout concept:
    creator on left
    description next to that
    */
    return (
        <div>
            <h1>{videoInfo.title}</h1>
            <h2>{videoInfo.creator}</h2>
            <h4>{videoInfo.description}</h4>
        </div>
    )
}

export default VideoInfo;