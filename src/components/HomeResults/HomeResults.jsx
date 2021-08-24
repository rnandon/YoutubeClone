import React from 'react';
import VideoPreview from '../VideoPreview/VideoPreview';

const HomeResults = (props) => {
    const homeResults = props.searchResults;
    // Map over results,  create array of VideoPreview objects
    // Using a counter to make sure a new row is added every three items?
    const results = homeResults.map((result) => {
        const video = {
            videoId: result.id.videoId,
            id: result.id,
            title: result.snippet.title,
            description: result.snippet.description,
            thumbnail: result.snippet.thumbnails.high.url,
            creator: result.snippet.channelTitle
        };

        return <VideoPreview video={video} type="home" />
    })


    return (
        <div className="row justify-content-center">
            {results}
        </div>
    )
}

export default HomeResults;