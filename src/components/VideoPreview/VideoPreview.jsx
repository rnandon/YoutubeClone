import React from 'react';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import { Link } from 'react-router-dom';

import './VideoPreview.css';

const VideoPreview = (props) => {
    const type = props.type;
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

    if (type==="search") {
        // Thumbnail on left, info on right
        return (
            <Link to={`/video/${video.videoId}`} className="col-sm-8 col-xs-10 m-5">
                <div className="row w-100 m-5" >
                    <div className="col-4" >
                        <VideoThumbnail imgurl={video.thumbnail} className="w-100" />
                    </div>
                    <div className="col-8" >
                        <VideoInfo videoInfo={videoInfo} className="w-100" />
                    </div>
                </div>    
            </Link>
        )
    } else if (type==="home") {
        // Thumbnail on top, info under
        return (
            <Link to={`/video/${video.id}`} className="col-md-3 col-xs-10 m-5 ps-5 pe-5 align-items-center text-decoration-none text-light">
                <div className="" >
                    <VideoThumbnail imgurl={video.thumbnail} className="align-items-center w-100" />
                </div>
                <div className="col-xs-10 text-center w-100">
                    <h1 className="">{videoInfo.title}</h1>
                    <h2 className="">{videoInfo.creator}</h2>
                </div>
            </Link>
        )
    } else if (type==="related") {
        // Smallest. Thumbnail on left, info on right
        return (
            <Link to={`/video/${video.videoId}`} className="row related-link overflow-hidden m-4" >
                <div className="card mb-3 mh-100">
                    <div className="row g-0 mh-100">
                        <div className="col-md-5 mh-100">
                            <VideoThumbnail imgurl={video.thumbnail} className="col-4 m-2 mh-100" />
                        </div>
                        <div className="col-md-6 mh-100 overflow-hidden">
                            <VideoInfo videoInfo={videoInfo} className="col-7 limit-width overflow-hidden" />
                        </div>
                    </div>
                </div>
            </Link>
        
        )
    } else {
        // Default cases. Left in to maintain code that hasn't been updated without breaking things
        if (video.videoId) {
            return (
                <Link to={`/video/${video.videoId}`} className="col-sm-3 col-xs-10">
                    <VideoThumbnail imgurl={video.thumbnail} />
                    <VideoInfo videoInfo={videoInfo} />
                </Link>
            )
        } else {
            // this is for the home page results only
            return (
                <Link to={`/video/${video.id}`} className="col-sm-3 col-xs-10">
                    <VideoThumbnail imgurl={video.thumbnail} />
                    <h1 className="text-dark">{videoInfo.title}</h1>
                    <h2 className="text-dark">{videoInfo.creator}</h2>
                </Link>
            )
        }
    }
}

export default VideoPreview;