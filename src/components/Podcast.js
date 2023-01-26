import React from 'react'

function Podcast() {
  return (
    <div className="max-w-4xl mx-auto border-4 border-red-200">
        <div className="mt-12">
            <div className="">
                <h2 className="text-4xl font-bold py-2">Title of the day</h2>
                <div>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <img alt="Profile pic" className="h-24 w-24 rounded-full" src="https://api.lorem.space/image/face?w=150&h=150"></img>
                        </div>
                        <span className="text-base font-normal mr-4">Guest:<br/> <span className="text-lg font-semibold">Micheal Mark</span></span>

                        <span className="text-base font-normal">Published: <br/> <span className="text-lg font-semibold">Jan 20, 2023</span></span>
                    </div>
                </div>
            </div>

            <div className="border border-slate-600 p-2 rounded mt-4 flex">
                <div className="w-48 h-48 bg-cover " style={{backgroundImage: "url('/js-podcast.png')"}}></div>
               <div className="pl-6 flex flex-col items-start justify-center">
                    <div>
                        <h2 className="font-light text-base pt-2">JavaScript Corner Podcast</h2>
                        <h2 className="font-bold text-2xl leading-10 pb-4">Podcast Title</h2>
                    </div>
                    <div>
                        <audio src="/episode-1.mp3" controls/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Podcast