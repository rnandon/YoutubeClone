import React from 'react';

export default VideoInfo = (props) => {
    const info = props.info; // get info from parent

    /*
    layout concept:
    creator on left
    description next to that
    */
    return (
        <h1> {info} </h1>
    )
}