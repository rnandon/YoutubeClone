import React, { useEffect, useState } from 'react';
import axios from 'axios';

const addComment = (dataUrl, commentInfo) => {
    // Post comment to database if 
    async function addNewComment(url) {
        let response = await axios.post(url, commentInfo);

        if (response) {
            console.log("API Call is Good");
        } else {
            console.log("API Call FAILED");
        }
    }

    addNewComment(dataUrl);
}

export default addComment;