import {useEffect, useState} from 'react'

function Player({ url }) {
  const audio = new Audio(url)
  const [duration, setDuration]  = useState(0)
  const [time, setTime] = useState(0)

  const handleMetadata = (e) => {
    setDuration(e.currentTarget.duration)
    setTime(e.currentTarget.currentTime)
  }

  useEffect(() => {
      // let time = audio.currentTime
      // let duration  = audio.duration
      console.log('time', time)
      console.log('duration', duration)
  }, [duration, time])

  return (
    <div className="p-2 rounded mt-4 ">
      <div className="md:pl-6 flex flex-col items-start justify-center">
        <audio className='w-full mt-auto' src={url} controls onLoadedMetadata={handleMetadata} />
      </div>

      {/* <div class="mt-1 bg-red-200">
					<div class="h-1 bg-grey-dark rounded-full ">
						<div class="w-1/5 h-1 bg-red-light rounded-full relative bg-green-200">
							<span class="w-4 h-4 bg-indigo-400 absolute pin-r pin-b mb-1 rounded-full shadow"></span>
						</div>
					</div>
				</div> */}
      
      {/* <div className='flex mt-4'>      
        <button onClick={() => audio.play()} class="bg-slate-600 px-2 rounded-lg hover:bg-slate-800">Play</button>
        <button onClick={() => audio.pause()} class="bg-slate-600 px-2 rounded-lg hover:bg-slate-800">Pause</button>
      </div> */}
    </div>
  )
}

export default Player
