import React from 'react';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';

export default VideoPreview = (props) => {
    const videoId = props.videoId;
    // Get info and thumbnail from YouTube api?

    const imgurl="";
    const info="";

    /*
    layout concept:
    VideoThumbnail on left (pass in imgurl)
    VideoInfo on right (pass in info)
    */


    return (
        <div>
            <VideoThumbnail imgurl={imgurl} />
            <VideoInfo info={info} />
        </div>
    )
}