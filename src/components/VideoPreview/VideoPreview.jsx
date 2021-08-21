import React from 'react';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import { Link } from 'react-router-dom';

const VideoPreview = (props) => {
    const video = props.video;
    const videoInfo = {
        title: video.title,
        description: video.description,
        creator: video.creator
    }

    /*
    layout concept:
    VideoThumbnail on left (pass in imgurl)
    VideoInfo on right (pass in info)
    */


    if (video.videoId) {
        return (
            <Link to={`/video/${video.videoId}`}>
                <VideoThumbnail imgurl={video.thumbnail} />
                <VideoInfo videoInfo={videoInfo} />
            </Link>
        )
    } else {
        // this is for the home page results only
        return (
            <Link to={`/video/${video.id}`}>
                <VideoThumbnail imgurl={video.thumbnail} />
                <h1>{videoInfo.title}</h1>
                <h2>{videoInfo.creator}</h2>
            </Link>
        )
    }
}

export default VideoPreview;