import Video from "./Video"

function VideoList({ videoListState, setVideoListState }) {
  return (
    <div className={`h-screen border-x-4 transition-all relative ${videoListState ? 'w-1/5' : 'w-0'}`}>
      <h2 className="p-4 font-bold border-y-2">Course content</h2>

      <button onClick={() => setVideoListState(!videoListState)}
        className="top-1/4 absolute -translate-x-full bg-black text-white px-2 py-4 text-xl -left-1 border-2">{">"}
      </button>
      <Video isWatched={true} description={'deed'} time={3} number={1}/>
      <Video isWatched={false} description={'sdadsa'} time={12} number={2}/>
      <Video isWatched={true} description={'dsadsad'} time={14} number={3}/>
    </div>
  )
}

export default VideoList