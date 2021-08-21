import React, { useEffect, useState } from 'react';
import useGetComments from '../../hooks/useGetComments';
import Comment from '../Comment/Comment';


// get comments from backend passing in videoId
// map over comments, get an array of comment components (if there are some)
// display comments sorted by likes
const Comments = (props) => {
    const videoId = props.videoId; 
    //let { comments } = useGetComments(`http://127.0.0.1:8000/video/${videoId}`)
    let { comments } = useGetComments('http://127.0.0.1:8000/video/13BrslyeKac')

    console.log(comments);

    let [videoComments, setComments] = useState({});

    useEffect(() => {
        console.log(comments);
        if (comments.data) {
            setComments(comments.data);
        }
    }, [comments])

    if (videoComments.length > 0 ) {
        console.log("video comments: " + videoComments[0].body)
        return (
            <div>
                <Comment comment={videoComments[0].body} />
            </div>
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