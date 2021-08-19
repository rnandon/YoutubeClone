import React from 'react';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';

const VideoPreview = (props) => {
    const video = props.video;

    /*
    layout concept:
    VideoThumbnail on left (pass in imgurl)
    VideoInfo on right (pass in info)
    */


    return (
        <div>
            <VideoThumbnail imgurl={video.thumbnail} />
            <VideoInfo title={video.title} description={video.description} creator={video.creator} />
        </div>
    )
}

export default VideoPreview;