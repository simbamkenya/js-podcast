import React from 'react'
import { FaRegHandPointRight, FaTwitter, FaInstagramSquare, FaSpotify } from "react-icons/fa";

function Podcast() {
  return (
    <div className="py-24 bg-[url('https://images.unsplash.com/photo-1526328828355-69b01701ca6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')]">
      <div className="container mx-auto flex">
        <div className="w-1/2 py-16 space-y-4">
          <h1 className="text-4xl text-white font-extrabold">MOST POPULAR SEASON: ORIGINS</h1>
          <div className="text-white flex">
            <div className="mr-4">
              <span className="block text-lg font-bold">LISTENING TIME</span>
              <span className="block text-lg font-bold">3h 32min</span>
            </div>
            <div>
              <span className="block text-lg font-bold">EPISODES</span>
              <span className="block text-lg font-bold">3</span>
            </div>
          </div>
          <p className='text-white font-bold'>We have the best collection of content around javascript ecosystem. We explore interesting topics and bring in cool people to engage with us</p>

          <div>
            <button className="text-white bg-transparent text-lg border font-bold px-12 py-2 rounded-full hover:bg-[#F7BD14] duration-150">Share</button>
            {/* <button></button> */}
          </div>

          <div className="flex">
            <span className="text-white font-bold">LISTEN & SUBSCRIBE ON: </span>
            <div className="flex gap-4">
              <div className="text-lg text-white hover:text-blue-400">
                <FaTwitter /> 
              </div>
              <div className="text-lg text-white hover:text-blue-400">
                <FaInstagramSquare/>
              </div>
              <div className="text-lg text-white hover:text-blue-400">
                <FaSpotify />
              </div>
              
              
            </div>
          </div>
        </div>
        <div className='w-1/2 sm:hidden bg-green-100'>

        </div>

      </div>

    {/* <div className="max-w-4xl mx-auto  mb-6 text-white">
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
    </div> */}
    </div>
  )
}

export default Podcast
