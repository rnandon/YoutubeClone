import React from 'react';

const VideoPlayer = (props) => {
    const videoUrl = `https://www.youtube.com/embed/${props.videoId}`

    /* return iframe with youtube video player from videoUrl */

    // Need custom CSS to set up screen size for iframe.
    return (
        <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}

export default VideoPlayer;