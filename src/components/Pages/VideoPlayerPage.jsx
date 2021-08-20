import React from 'react';
import Video from '../Video/Video';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
// Import all the other components we'll need

const VideoPlayerPage = (props) => {
    const videoId = 0; // Passed in from props. Will be passed when a video is selected to watch

    /* 
    layout concept:
    video box on left - pass videoId to get info and videoURL from YouTube api
    related videos to the right pass videoId to get related videos from YouTube api
    */
    return (
        <div>
            <Video videoId={videoId} />
            <RelatedVideos videoId={videoId} />
        </div>
    );
}

export default VideoPlayerPage;