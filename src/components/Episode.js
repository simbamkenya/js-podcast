import React from 'react'
import { Link } from 'react-router-dom';
import Player from './Player';

function Episode({ episode }) {
  return (
    <div className="max-w-4xl mx-auto md:flex rounded-md drop-shadow-md bg-white mt-8">
      <div className="h-48 lg:w-96 flex-none md:h-auto  bg-cover overflow-hidden  bg-white" style={{backgroundImage: "url('/js-podcast.png')"}} alt="js-image">
      </div>
      <div className="">
        <div className="px-8 py-4" >
           <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24"><path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm6.687 13.482c0-.802-.418-1.429-1.109-1.695.528-.264.836-.807.836-1.503 0-1.346-1.312-2.149-2.581-2.149-1.477 0-2.591.925-2.659 2.763h1.645c-.014-.761.271-1.315 1.025-1.315.449 0 .933.272.933.869 0 .754-.816.862-1.567.797v1.28c1.067 0 1.704.067 1.704.985 0 .724-.548 1.048-1.091 1.048-.822 0-1.159-.614-1.188-1.452h-1.634c-.032 1.892 1.114 2.89 2.842 2.89 1.543 0 2.844-.943 2.844-2.518zm4.313 2.518v-7.718h-1.392c-.173 1.154-.995 1.491-2.171 1.459v1.346h1.852v4.913h1.711z"/></svg>
            <span className="ml-6 text-base">Jan 03, 2023</span>
           </div>

           <h1 className="text-4xl font-bold">{JSON.parse(episode.title)} </h1>
           <p className="text-lg leading-8">{JSON.parse(episode.description)}</p>
          <div className="mt-4">
            <h2 className="font-semibold text-base">Hosts:</h2>
            <ul className='mb-2'>
              <li>Micheal Martins</li>
              <li>Grace Kamanue</li>
            </ul>

            <h2 className="font-semibold text-base">Guests: </h2>
            <ul>
              <li>Tupac Shakur</li>
            </ul>
          </div>
          <Player />
        </div>
      </div>

    </div>
  )
}

export default Episode