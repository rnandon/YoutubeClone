import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';
import useComments from '../../hooks/useComments';
import AddCommentView from '../AddCommentView/AddCommentView';
//import AddReplyView from '../AddReplyView/AddReplyView';


// get comments from backend passing in videoId
// map over comments, get an array of comment components (if there are some)
// display comments sorted by likes
const Comments = (props) => {
    const videoId = props.videoId; 
    let { commentsData, postComment } = useComments(`http://127.0.0.1:8000/video/${videoId}`)

    let [comments, setComments] = useState([]);

    useEffect(() => {
        if (commentsData.length > 0) {
            debugger;
            setComments(commentsData);
        }
    }, [commentsData])

    if (comments.length > 0 ) {
        return (
            <div>
                <AddCommentView videoId={videoId} postComment={postComment} />
                <p />
                <Comment comments={comments} postComment={postComment} />
            </div>
        )
    } else {
        return (
            <div>
                <AddCommentView videoId={videoId} postComment={postComment} />
                Gathering comments...
            </div>
        )
    }
}

export default Comments;