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
    let {videoData} = useWaitData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${props.videoId}&type=video&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`);

    // We're going to need the outputResults as a separate stateful variable so when its value is changed, the whole component refreshes.
    // This defaults to an empty array so we can check the length for rendering purposes.
    let [outputResults, setOutputResults] = useState([]);

    // VV If you want to use dummy data for testing this out, just uncomment this line VV
    //const searchResults = require('../../hooks/sampleOutput.json')

    // This part is a little tricky to grasp.
    // At a high level, when the videoData changes, this will log the videoData and change the outputResults, triggering a rerender, which will then change the outcome of the if statements at the bottom.
    useEffect(() => {
        // This part is an arrow method that will run everytime this useEffect's dependency changes.
        // This is kind of like an event - when you click a button, it runs whatever is stored in its onClick method. Instead of clicking a button, this method runs when videoData is changed.
        console.log(videoData);
        if (videoData.items) {
            // videoData will have 3 different values.
            // First, it will be a pending promise.
            // Then, it will be a waiting promise.
            // Then, it will be an actual response (or a fulfilled promise).
            // Only the actual response will have a .items attribute (refer to sampleOutput.json to see where this is coming from)
            // So this section will only ever run AFTER we get the completed response.

            setOutputResults(videoData.items);
            // This is where the outputResults being stateful comes in handy.
            // By using the setOutputResults function, we force a refresh similar to this.setState on a class based component.
            // Here, we're setting outputResults to videoData.items, which is just an array of video objects with a bunch of useful info.
        }

        // V V V V  -- This part is our dependency. We can have none, or we can have as many as we want. When this value changes, the useEffect callback function runs.
    }, [videoData])

    // If we've gotten some actual data back, then useEffect will set the state of outputResults to be an array of whatever length.
    // So, this section is explicitly checking for the length, but its real purpose is to see if we have data we can process yet.
    // If we do, then it will process it and render all our related videos.
    if (outputResults.length > 0) {
        debugger;
        // A nice lil debugger for checking what stuff is actually coming in

        // We'll map over the list, get the data we need, and hand it off to the VideoPreview component which will handle all the nice display stuff.
        const relatedVideos = outputResults.map((relatedVideo) => { 
            const video = {
                videoId: relatedVideo.id.videoId,
                title: relatedVideo.snippet.title,
                description: relatedVideo.snippet.description,
                thumbnail: relatedVideo.snippet.thumbnails.high.url,
                creator: relatedVideo.snippet.channelTitle
            };

            // Here's our end goal. We've got one single video's data, so we need to render it and add it to an array for the renderer to handle.
            return (<VideoPreview video={video} />) 
        });
        return (
            <div>
                {relatedVideos}
            </div>
        )
    } else {
        // If we hit this spot, one of two things is true:
        // - The request failed and we got some kind of error code but no data
        // - Or (and this is more likely) we haven't gotten a response yet. So we're still "Gathering Search results"
        return (
            <div>
                Gathering Search results
            </div>
        )
    }
}

export default RelatedVideos;