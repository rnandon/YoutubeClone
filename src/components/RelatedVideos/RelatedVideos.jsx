import React, { useEffect, useState } from 'react';

import useWaitData from '../../hooks/useWaitData';

import VideoPreview from '../VideoPreview/VideoPreview';


const RelatedVideos = (props) => {
    // videoData is actually related videos
    let {videoData} = useWaitData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${props.videoId}&type=video&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`)
    let [outputResults, setOutputResults] = useState([]) 
    //const searchResults = require('../../hooks/sampleOutput.json')

    useEffect(() => {
        console.log(videoData);
        if (videoData.items) {
            setOutputResults(videoData.items);
        }
    }, [videoData])

    if (outputResults.length > 0) {
        debugger;
        const relatedVideos = outputResults.map((relatedVideo) => { 
            const video = {
                videoId: relatedVideo.id.videoId,
                title: relatedVideo.snippet.title,
                description: relatedVideo.snippet.description,
                thumbnail: relatedVideo.snippet.thumbnails.high.url,
                creator: relatedVideo.snippet.channelTitle
            };

            return (<VideoPreview video={video} />) 
        });
        return (
            <div>
                {relatedVideos}
            </div>
        )
    } else {
        return (
            <div>
                Gathering Search results
            </div>
        )
    }
}

export default RelatedVideos;