import React from 'react';
import VideoPreview from '../VideoPreview/VideoPreview';

const SearchResults = (props) => {
    debugger;
    const searchResults = props.searchResults;
    // Map over results,  create array of VideoPreview objects
    const results = searchResults.map((result) => {
        const video = {
            videoId: result.id.videoId,
            title: result.snippet.title,
            description: result.snippet.description,
            thumbnail: result.snippet.thumbnails.high,
            creator: result.snippet.channelTitle
        };

        return <VideoPreview video={video} />
    })


    return (
        <div>
            {results}
        </div>
    )
}

export default SearchResults;