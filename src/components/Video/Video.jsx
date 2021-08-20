import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoInfo from '../VideoInfo/VideoInfo';
import Comments from '../Comments/Comments';

const Video = (props) => {
    const videoId = 0; // get from props

    const videoData = {}; // get data packet from YouTube api
    const videoUrl = ""; // extract from data
    const videoInfo = ""; // extract from data

    /*
    layout concept:
    video player on top - pass in videoUrl
    video info under that - pass in videoInfo
    comments under that - pass in videoId
    */


    return (
        <div>
            <VideoPlayer videoId={videoId} />
            <VideoInfo videoInfo={videoInfo} />
            <Comments videoId={videoId} />
        </div>
    )
}

export default Video;