import { useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [url, setUrl] = useState("video_1.mp4");
  return (
    <div className="video" id="video">
      <ReactPlayer url={url} controls />
      <div className="overlay">
        <div
          className="circle"
          onClick={() => {
            setUrl("video_2.mp4");
          }}
        >
          <img src="video-2.png" />
        </div>
        <div className="circle"  onClick={() => setUrl("video_3.mp4")}>
          <img src="video-3.png" />
        </div>
        <div className="circle"  onClick={() => setUrl("video_1.mp4")}>
          <img src="video-1.png" />
        </div>
        <div className="circle" onClick={() => setUrl("video_4.mp4")}><img src="video-4.png" /></div>
        <div className="circle" onClick={() => setUrl("video_5.mp4")}><img src="video-5.png" /></div>
        <div className="circle" onClick={() => setUrl("video_6.mp4")}><img src="video-6.png" /></div>
        <div className="circle" onClick={() => setUrl("video_7.mp4")}><img src="video-7.png" /></div>
        <div className="circle" onClick={() => setUrl("video_8.mp4")}><img src="video-8.png" /></div>
        <div className="circle" onClick={() => setUrl("video_9.mp4")}><img src="video-9.png" /></div>
      </div>
    </div>
  );
};

export default Video;
