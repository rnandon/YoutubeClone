import React from 'react';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import { Link } from 'react-router-dom';

const VideoPreview = (props) => {
    const video = props.video;

    /*
    layout concept:
    VideoThumbnail on left (pass in imgurl)
    VideoInfo on right (pass in info)
    */


    return (
        <Link to={`/video/${video.videoId}`}>
            <VideoThumbnail imgurl={video.thumbnail} />
            <VideoInfo title={video.title} description={video.description} creator={video.creator} />
        </Link>
    )
}

export default VideoPreview;