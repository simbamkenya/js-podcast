import React from 'react'
import { FaRegHandPointRight } from "react-icons/fa";

function Podcast() {
  return (
    <div className="max-w-4xl mx-auto  mb-6">
      <div className="mt-12">
        <div className="">
          <h2 className="text-2xl text-center uppercase mb-3  md:text-4xl font-bold py-2">
            Javascript Corner
          </h2>
          <div className='rounded-sm border'>
            <div className="flex items-start justify-start flex-col md:flex-row">
              <div className="mr-8">
                <img
                  alt="Profile pic"
                  className="h-56 w-68 rounded-sm"
                  src="https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                ></img>
              </div>
              <span className="text-base font-normal flex flex-col gap-0.5 mt-4">
              <span className="text-2xl font-semibold flex items-center">Our Promise</span>
                <span className="text-lg font-semibold flex items-center ml-4"><FaRegHandPointRight className='mr-2'/>Quality Content</span>
                <span className="text-lg font-semibold flex items-center ml-4"><FaRegHandPointRight className='mr-2'/>Amazing  Guests</span>
                <span className="text-lg font-semibold flex items-center ml-4"><FaRegHandPointRight className='mr-2'/>Awesome Host</span>
                <span className="text-lg font-semibold flex items-center ml-4"><FaRegHandPointRight className='mr-2'/>Best Topics</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podcast
