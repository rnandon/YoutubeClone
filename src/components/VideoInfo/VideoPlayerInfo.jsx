import React from 'react';

const VideoPlayerInfo = (props) => {
    return (
        <div class="accordion" id="accordionExample">
            <h1>{props.videoInfo.title}</h1>
            <h2>{props.videoInfo.creator}</h2>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Description
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <p>{props.videoInfo.description}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayerInfo;