import React, { useEffect, useState } from 'react';
// import useGetComments from '../../hooks/useGetComments';
import Comment from '../Comment/Comment';
import useWaitData from '../../hooks/useGetComments';


// get comments from backend passing in videoId
// map over comments, get an array of comment components (if there are some)
// display comments sorted by likes
const Comments = (props) => {
    const videoId = props.videoId; 
    //let { comments } = useGetComments(`http://127.0.0.1:8000/video/${videoId}`)
    let { videoData } = useWaitData(`http://127.0.0.1:8000/video/${videoId}`)

    let [comments, setComments] = useState([]);

    useEffect(() => {
        console.log(videoData);
        if (videoData) {
            setComments(videoData);
        }
    }, [videoData])

    if (comments.length > 0 ) {
        console.log("video comments: " + comments[1].body)
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