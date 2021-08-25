import React from 'react';
import Video from '../Video/Video';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
// Import all the other components we'll need

const VideoPlayerPage = (props) => {
    const videoId = props.videoId; // Passed in from props. Will be passed when a video is selected to watch

    /* 
    layout concept:
    video box on left - pass videoId to get info and videoURL from YouTube api
    related videos to the right pass videoId to get related videos from YouTube api
    */
    return (
        <div id="page" className="row" >
            <div className="col-xs-10 col-sm-7 m-3">
                <Video videoId={videoId} />
            </div>
            <div className="col-xs-10 col-sm-4 m-3">
                <RelatedVideos videoId={videoId} />
            </div>
        </div>
    );
}

export default VideoPlayerPage;