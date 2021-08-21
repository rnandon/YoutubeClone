import React, { useEffect, useState } from 'react';
import axios from 'axios';

// use this to get comments from BACKEND
const useGetComments = (dataUrl) => {
    // store the comments here
    let [comments, setComments] = useState();

    // this calls the backend for the comments related to a video
    async function getComments(url) {
        const response = await axios.get(url);

        if (response.data) {
            setComments(response.data);
        } 
    }

    useEffect(() => {
        getComments(dataUrl)
    }, [])

    return { comments };
}

export default useGetComments;