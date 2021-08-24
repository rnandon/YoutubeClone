import React from 'react';

const VideoPlayerInfo = (props) => {
    return (
        <div className="accordion color-text" id="accordionExample">
            <h1>{props.videoInfo.title}</h1>
            <h2>{props.videoInfo.creator}</h2>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Description
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>{props.videoInfo.description}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayerInfo;