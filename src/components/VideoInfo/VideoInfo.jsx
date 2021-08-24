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
        <div className="card-body overflow-hidden text-dark">
            <h5 className="card-title overflow-hidden mh-25">{videoInfo.title}</h5>
            <p className="card-text overflow-hidden mh-25">{videoInfo.creator}</p>
            <p className="card-text overflow-hidden mh-50">{videoInfo.description}</p>
        </div>
    )
}

export default VideoInfo;