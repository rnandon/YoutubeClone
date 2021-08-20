import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useWaitData = (dataUrl) => {
    // Specifically for use with the YouTube API. Relies on the snippet attribute
    // Retrieves data from url. Automatically updates when that data comes back, 
    //   cleaning up the await process a bit
    let [videoData, setVideoData] = useState({});

    async function getData(url) {
        const response = await axios.get(url);
        
        if (response.data) {
            setVideoData(response.data);
        }
    }

    useEffect(() => {
        getData(dataUrl)
    }, [])

    return { videoData };
}

export default useWaitData;