import React, { useEffect, useState } from 'react';
import axios from 'axios';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoInfo from '../VideoInfo/VideoInfo';
import Comments from '../Comments/Comments';

const Video = (props) => {
    const videoId = props.videoId;
    let [videoData, setVideoData] = useState({});
    let [videoInfo, setVideoInfo] = useState(false);

    async function getVideo(videoId) {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`);
        
        if (response.data) {
            setVideoData(response.data.items[0]);
        }
    }

    useEffect(() => {
        getVideo(videoId)
    }, [videoId])
    
    useEffect(() => {
        console.log(videoData)
        if (videoData.snippet && !videoInfo) {
            debugger;
            setVideoInfo({
                title: videoData.snippet.title,
                creator: videoData.snippet.channelTitle,
                description: videoData.snippet.description
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
                <VideoInfo videoInfo={videoInfo} />
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