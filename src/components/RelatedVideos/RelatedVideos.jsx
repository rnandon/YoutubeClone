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
    let {videoData} = useWaitData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${props.videoId}&type=video&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`);

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
            if (relatedVideo.snippet) {
                const video = {
                    videoId: relatedVideo.id.videoId,
                    title: relatedVideo.snippet.title,
                    description: relatedVideo.snippet.description,
                    thumbnail: relatedVideo.snippet.thumbnails.medium.url,
                    creator: relatedVideo.snippet.channelTitle
                };

                return (
                    <div class="mb-4">
                        <VideoPreview video={video} type="related" />
                    </div>
                ) 
            }
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