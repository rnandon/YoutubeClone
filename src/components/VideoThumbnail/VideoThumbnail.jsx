import React from 'react';

const VideoThumbnail = (props) => {

    // just return a formatted image from the thumbnail url
    return (
        <img src={props.imgurl}  className="m-1" />
    )
}

export default VideoThumbnail;