import React from 'react'

function Podcast() {
  return (
    <div className="max-w-4xl mx-auto  mb-6">
      <div className="mt-12">
        <div className="">
          <h2 className="text-2xl text-center md:text-4xl font-bold py-2">
            Javascript Corner
          </h2>
          <div>
            <div className="flex items-center justify-center flex-col md:flex-row">
              <div className="mr-2">
                <img
                  alt="Profile pic"
                  className="h-24 w-24 rounded-full"
                  src="https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                ></img>
              </div>
              <span className="text-base font-normal mr-4">
                Guest:
                <br />{' '}
                <span className="text-lg font-semibold">Micheal Mark</span>
              </span>

              <span className="text-base font-normal">
                Published: <br />{' '}
                <span className="text-lg font-semibold">Jan 20, 2023</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podcast
