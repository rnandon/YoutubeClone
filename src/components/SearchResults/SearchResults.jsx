import React from 'react';
import VideoPreview from '../VideoPreview/VideoPreview';

const SearchResults = (props) => {
    const searchResults = props.searchResults;
    // Map over results,  create array of VideoPreview objects
    const results = searchResults.map((result) => {
        const video = {
            videoId: result.id.videoId,
            id: result.id,
            title: result.snippet.title,
            description: result.snippet.description,
            thumbnail: result.snippet.thumbnails.high.url,
            creator: result.snippet.channelTitle
        };

        return <VideoPreview video={video} type="search" className="m-5" />
    })


    return (
        <div>
            {results}
        </div>
    )
}

export default SearchResults;