import React from "react";

import './Video.css'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed" style={{textAlign: 'center', position: 'relative', left: '10%'}}>
        <iframe className="video-responsive" src={videoSrc} allowFullScreen title="Video player" style={{height: '20rem', width: '40rem', marginTop: '2rem'}} />
      </div>
      <div className="ui segment">
        <h4 className="video">{video.snippet.title}</h4>
        {/* <p style={{width: '20%'}}>{video.snippet.description}</p> */}
      </div>
    </div>
  );
};

export default VideoDetail;