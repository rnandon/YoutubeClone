import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useComments = (url) => {
    // Retrieves and maintains local array of comments
    //   cleaning up the await process a bit

    // We need commentData to have state so it can rerender a component when it gets updated. 
    const [commentsData, setCommentsData] = useState({});

    async function getData(url) {
        // This is only for retrieving comments!!!
        const response = await axios.get(url);
        
        // When we have data, we need to get it to the videoData variable and make the page reload to handle it.
        // Expecting a list of comments as response data
        if (response.data) {
            setCommentsData(response.data);
        }
    }

    async function postComment(url, payload) {
        // Send the basics, get back the full info
        const response = await axios.post(url, payload);

        // When the data comes back, add it to our list of comments
        // Expecting a single comment as the response data
        if (response.data) {
            getData(url);
        }
    }

    // Start getting the data on load
    useEffect(() => {
        getData(url)
    }, [])

    return { commentsData, postComment };
}

export default useComments;