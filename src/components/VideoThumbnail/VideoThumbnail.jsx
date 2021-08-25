import React from 'react';
import './VideoThumbnail.css';

const VideoThumbnail = (props) => {

    // just return a formatted image from the thumbnail url
    return (
        <img src={props.imgurl}  id="thumbnail"/>
    )
}

export default VideoThumbnail;