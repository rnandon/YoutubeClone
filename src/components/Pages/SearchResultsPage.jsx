import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from '../SearchResults/SearchResults';

const SearchResultsPage = (props) => {
    //const searchResults = getSearchResults(props.searchTerm).catch(console.error);
    const searchResults = require('../../hooks/sampleOutput.json')

    if (searchResults) {
        return (
            <div>
                <SearchResults searchResults={searchResults.items} />
            </div>
        )
    }
}


async function getSearchResults(searchTerm) {
    const response = axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`)

    return response.data;
}

export default SearchResultsPage;