import React from 'react';
import './VideoInfo.css';

const VideoPlayerInfo = (props) => {
    return (
        <div className="accordion color-text" id="accordionBg">
            <h1 class="mt-2">{props.videoInfo.title}</h1>
            <h2 class="mb-2">{props.videoInfo.creator}</h2>
            <div className="accordion-item mb-4">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button bg-danger text-light border border-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Description
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionBg">
                <div className="accordion-body bg-secondary">
                    <p>{props.videoInfo.description}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayerInfo;