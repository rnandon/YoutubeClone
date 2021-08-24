import React, { useEffect, useState } from 'react';

import useWaitData from '../../hooks/useWaitData';

import VideoPreview from '../VideoPreview/VideoPreview';

const RelatedVideos = (props) => {

    // We're going to need the outputResults as a separate stateful variable so when its value is changed, the whole component refreshes.
    // This defaults to an empty array so we can check the length for rendering purposes.
    let [outputResults, setOutputResults] = useState([]);

    // Use dummy data instead of API call
    // const tempData = require('../../hooks/sampleOutput.json');
    // setOutputResults(tempData.items);

    // Make API call and use live data
    let {videoData} = useWaitData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${props.videoId}&type=video&key=AIzaSyC2O3ybnnt7OD7m3rpYpYN50EzDk7qa5Ms`);

    useEffect(() => {
        console.log(videoData);
        if (videoData.items) {
            // Update output when we get data back
            setOutputResults(videoData.items);
        }
    }, [videoData])
    

    // Check if we have data back
    if (outputResults.length > 0) {
        // If we have data, process it
        const relatedVideos = outputResults.map((relatedVideo) => { 
            const video = {
                videoId: relatedVideo.id.videoId,
                title: relatedVideo.snippet.title,
                description: relatedVideo.snippet.description,
                thumbnail: relatedVideo.snippet.thumbnails.medium.url,
                creator: relatedVideo.snippet.channelTitle
            };

            return (<VideoPreview video={video} type="related" />) 
        });
        return (
            <div>
                {relatedVideos}
            </div>
        )
    } else {
        // Either no response or an error
        return (
            <div>
                Gathering Search results
            </div>
        )
    }
}

export default RelatedVideos;