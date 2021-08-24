import React, { useEffect, useState } from 'react';

import useWaitData from '../../hooks/useWaitData';

import VideoPreview from '../VideoPreview/VideoPreview';

const RelatedVideos = (props) => {
    // General flow:
    // - the props are just videoId, passed in from the VideoPlayerPage (or the home page if you want to use this component)
    // - We're going to use the videoId to get the list of related info
    // - - Take a look at sampleOutput.json in the hooks folder if you want to dig into what the data looks like
    // - We'll let useWaitData handle all the async stuff while waiting for data to come back
    // - When the data actually does come back, we'll need to update the output so we stop rendering "Gathering Search results" and instead render the actual videos
    // - After we have something to output, we'll create the array of relatedVideos, which will really just be an array of VideoPreview components



    // videoData is actually related videos. See useWaitData implementation for more details on what it's doing.
    // For the purposes here, we give useWaitData a URL to get data from, and store that as videoData - it will automatically update when the data comes in.
    let {videoData} = useWaitData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${props.videoId}&type=video&key=AIzaSyC2O3ybnnt7OD7m3rpYpYN50EzDk7qa5Ms`);

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