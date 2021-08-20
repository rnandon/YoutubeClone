import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useWaitData = (dataUrl) => {
    // Specifically for use with the YouTube API. Relies on the snippet attribute
    // Retrieves data from url. Automatically updates when that data comes back, 
    //   cleaning up the await process a bit

    // We need videoData to have state so it can rerender a component when it gets updated. 
    // Again, this is like this.setState, we're just handling it in a more confined way with setVideoData.
    let [videoData, setVideoData] = useState({});

    // This is the call to actually get the info, this is straight from the axios request methods you made on App.js
    async function getData(url) {
        const response = await axios.get(url);
        
        // This part is new. Instead of console.log(data), we're going to do something with it.
        // When we have data, we need to get it to the videoData variable and make the page reload to handle it.
        if (response.data) {
            setVideoData(response.data);
        }
    }

    // We need to get the call started, but we only want to call it once.
    // useEffect will run every time a dependency changes, but it will also run just like componentDidMount on a class based component.
    // That's the functionality we're using here.
    // We want this to run as soon as this hook is called - it will get the data retrieval process started but only once.
    useEffect(() => {
        getData(dataUrl)
        // Just get the data. There isn't a need to run this twice, so no dependencies
        // L in here.
    }, [])

    // I don't actually know if it needs to be returned this way, but that's how I saw it so that's how I did it.
    // Just remember to destructure anytime you use this hook!!!
    // If you don't, it won't work. I don't know why.
    // For quick reference: 
    //      let { videoData } = useWaitData(somelongurlforgettingnicedata);
    // Good luck!
    return { videoData };
}

export default useWaitData;