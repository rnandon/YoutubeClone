import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import useWaitData from '../../hooks/useWaitData';
//import AddReplyView from '../AddReplyView/AddReplyView';


// get comments from backend passing in videoId
// map over comments, get an array of comment components (if there are some)
// display comments sorted by likes
const Comments = (props) => {
    const videoId = props.videoId; 
    let { videoData } = useWaitData(`http://127.0.0.1:8000/video/${videoId}`)

    let [comments, setComments] = useState([]);

    useEffect(() => {
        if (videoData) {
            setComments(videoData);
        }
    }, [videoData])

    if (comments.length > 0 ) {
        return (
                <Comment comments={comments} />
        )
    } else {
        return (
            <div>
                Gathering Search results
            </div>
        )
    }
}

export default Comments;