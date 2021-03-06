import React, { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import useWaitData from '../../hooks/useWaitData';
import './Pages.css';

const SearchResultsPage = (props) => {
    // videoData is actually search results
    let {videoData} = useWaitData(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.searchTerm}&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`)
    let [outputResults, setOutputResults] = useState([]) 
    //const searchResults = require('../../hooks/sampleOutput.json')

    useEffect(() => {
        console.log(videoData);
        if (videoData.items) {
            setOutputResults(videoData.items);
        }
    }, [videoData])

    if (outputResults.length > 0) {
        console.log("Output results: " + outputResults);
        return (
            <div id="page">
                <p class="text-center py-3" id="popularVideos">Results for {props.searchTerm}</p>
                <SearchResults searchResults={outputResults} />
            </div>
        )
    } else {
        return (
            <div id="popularVideos">
                Gathering Search results...
            </div>
        )
    }
}

export default SearchResultsPage;