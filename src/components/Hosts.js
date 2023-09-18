import React from 'react'

function Hosts() {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center justify-center space-x-8 py-8">
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img
            alt="Profile pic"
            className="h-36 w-36 rounded-full"
            src="/one.jpg"
          ></img>
        </div>
        <span className="text-center">Housine Naese</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img
            alt="Profile pic"
            className="h-36 w-36 rounded-full"
            src="./two.jpg"
          ></img>
        </div>
        <span className="text-center">Kamnau Kamande</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img
            alt="Profile pic"
            className="h-36 w-36 rounded-full"
            src="./three.jpg"
          ></img>
        </div>
        <span className="text-center">Ann Kenyaa</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img
            alt="Profile pic"
            className="h-36 w-36 rounded-full"
            src="/four.jpg"
          ></img>
        </div>
        <span className="text-center">Mary Jane</span>
      </div>
    </div>
  )
}

export default Hosts
