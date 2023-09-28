import React from 'react'

function Hosts() {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center justify-center space-x-8 py-8 text-white">
      <div className="flex flex-col items-center">
      
        <div className="mb-2">
          <img
            alt="Profile pic"
            className="h-36 w-36 rounded-full"
            src="/one.jpg"
          ></img>
        </div>
        <span className="text-center mb-2 font-bold">Housine Naese</span>
        <span className='text-base'>Software Engineer</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img
            alt="Profile pic"
            className="h-36 w-36 rounded-full"
            src="./two.jpg"
          ></img>
        </div>
        <span className="text-center mb-2 font-bold">Kamnau Kamande</span>
        <span className='text-base'>Frontend Developer</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img
            alt="Profile pic"
            className="h-36 w-36 rounded-full"
            src="./three.jpg"
          ></img>
        </div>
        <span className="text-center mb-2 font-bold">Ann Kenyaa</span>
        <span className='text-base'>UI/UX Designer</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img
            alt="Profile pic"
            className="h-36 w-36 rounded-full"
            src="/four.jpg"
          ></img>
        </div>
        <span className="text-center mb-2 font-bold">Mary Jane</span>
        <span className='text-base'>Fullstack Developer</span>
      </div>
    </div>
  )
}

export default Hosts
