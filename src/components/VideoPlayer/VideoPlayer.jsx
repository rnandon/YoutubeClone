import React from 'react';

const VideoPlayer = (props) => {
    const videoUrl = `https://www.youtube.com/embed/${props.videoId}`

    /* return iframe with youtube video player from videoUrl */

    // Need custom CSS to set up screen size for iframe.
    return (
        <div className="ratio ratio-16x9 mt-1">
            <iframe className="w-100 h-100" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default VideoPlayer;