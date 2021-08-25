import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useWaitData from '../../hooks/useWaitData';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoPlayerInfo from '../VideoInfo/VideoPlayerInfo';
import Comments from '../Comments/Comments';
import AddCommentView from '../AddCommentView/AddCommentView';

const Video = (props) => {
    const videoId = props.videoId;
    let [videoInfo, setVideoInfo] = useState(false);

    let {videoData} = useWaitData(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`);

    
    useEffect(() => {
        if (videoData.items && !videoInfo) {
            let relevantData = videoData.items[0].snippet;
            setVideoInfo({
                title: relevantData.title,
                creator: relevantData.channelTitle,
                description: relevantData.description
            });
        }
    }, [videoData])

    /*
    layout concept:
    video player on top - pass in videoUrl
    video info under that - pass in videoInfo
    comments under that - pass in videoId
    */

    if (videoInfo) {
        return (
            <div>
                <VideoPlayer videoId={videoId} />
                <VideoPlayerInfo videoInfo={videoInfo} />
                <Comments videoId={videoId} />
            </div>
        )
    } else {
        return (
            <div>
                Loading data
            </div>
        )
    }
    
}

export default Video;