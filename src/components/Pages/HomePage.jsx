import React, { useEffect, useState } from 'react';

import useWaitData from '../../hooks/useWaitData';
import HomeResults from '../HomeResults/HomeResults';

import './HomePage.css';

const HomePage = () => {
    // API Request for popular youtube videos
    let {videoData} = useWaitData('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=US&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg')

    // create local state for popular videos results
    let [outputResults, setOutputResults] = useState([])

    // get access to the API request data and store it
    useEffect(() => {
        if (videoData.items) {
            setOutputResults(videoData.items);
        }
    }, [videoData])

    // send the data to be displayed or display default message
    if (outputResults.length > 0) {
        return (
            <div>
                <h2 class="text-center py-3" id="popularVideos">Popular videos</h2>
                <HomeResults searchResults={outputResults} />
            </div>
        )
    } else {
        return (
            <div class="border border-white">
                Loading Videos
            </div>
        )
    }
}

export default HomePage;