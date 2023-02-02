import React from 'react'


function Podcast() {
  return (
    <div className="max-w-4xl mx-auto  mb-6">
        <div className="mt-12">
            <div className="">
                <h2 className="text-4xl font-bold py-2">Javascript Corner</h2>
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
        </div>
    </div>
  )
}

export default Podcast