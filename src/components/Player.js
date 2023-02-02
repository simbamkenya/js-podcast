import React from 'react'

function Player() {
  
  return (
    <div className="border border-slate-600 p-2 rounded mt-4 flex">
        {/* <div className="w-48 h-48 bg-cover " style={{backgroundImage: "url('/js-podcast.png')"}}></div> */}
        <div className="pl-6 flex flex-col items-start justify-center">
            {/* <div>
                <h2 className="font-light text-base pt-2">JavaScript Corner Podcast</h2>
                <h2 className="font-bold text-2xl leading-10 pb-4">Podcast Title</h2>
            </div> */}
            <div>
                <audio src="/episode-1.mp3" controls/>
            </div>
        </div>
    </div>
  )
}

export default Player