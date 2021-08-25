import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useWaitData = (dataUrl) => {
    // Retrieves data from url. Automatically updates when that data comes back, 
    //   cleaning up the await process a bit

    // We need videoData to have state so it can rerender a component when it gets updated. 
    let [videoData, setVideoData] = useState({});

    async function getData(url) {
        const response = await axios.get(url);
        
        // When we have data, we need to get it to the videoData variable and make the page reload to handle it.
        if (response.data) {
            setVideoData(response.data);
        }
    }

    // Start getting the data on load
    useEffect(() => {
        getData(dataUrl)
    }, [])

    return { videoData };
}

export default useWaitData;