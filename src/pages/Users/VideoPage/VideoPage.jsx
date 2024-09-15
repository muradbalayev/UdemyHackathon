import ReactPlayer from "react-player"
import VideoList from "./VideoList/VideoList"
import { useState } from "react"

function VideoPage() {
  const [VideoListState, setVideoListState] = useState(false);
  return (
    <div className="flex overflow-hidden">
      <div className="w-full transition-all">
        <ReactPlayer
          url='https://www.youtube.com/watch?v=vhQc26FTsYE&list=RDvhQc26FTsYE&start_radio=1'
          width={'100%'}
          height={VideoListState ? '400px' : '600px'}
        />
        <div className="p-4">
          <h1 className="font-bold">Course Name</h1>
          <p>Video description</p>
        </div>
      </div>
      <VideoList videoListState={VideoListState} setVideoListState={setVideoListState} />
    </div>
  )
}

export default VideoPage