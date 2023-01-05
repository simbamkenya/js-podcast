import React from 'react'

function Episode({ episode }) {
  return (
    <div className="max-w-4xl mx-auto md:flex rounded-md drop-shadow-md bg-green-200 mt-4">
      <div className="h-48 lg:w-96 flex-none md:h-auto  bg-cover overflow-hidden  bg-lime-200" style={{backgroundImage: "url('/js-podcast.png')"}} title="js-image">
      </div>
      <div className="">
        <div className="px-8 py-4" >
           <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24"><path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm6.687 13.482c0-.802-.418-1.429-1.109-1.695.528-.264.836-.807.836-1.503 0-1.346-1.312-2.149-2.581-2.149-1.477 0-2.591.925-2.659 2.763h1.645c-.014-.761.271-1.315 1.025-1.315.449 0 .933.272.933.869 0 .754-.816.862-1.567.797v1.28c1.067 0 1.704.067 1.704.985 0 .724-.548 1.048-1.091 1.048-.822 0-1.159-.614-1.188-1.452h-1.634c-.032 1.892 1.114 2.89 2.842 2.89 1.543 0 2.844-.943 2.844-2.518zm4.313 2.518v-7.718h-1.392c-.173 1.154-.995 1.491-2.171 1.459v1.346h1.852v4.913h1.711z"/></svg>
            <span className="ml-6 text-base">Jan 03, 2023</span>
           </div>

           <h1 className="text-4xl font-bold">Title: {episode.title} </h1>
           <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo pretium augue, non convallis nunc facilisis quis. Phasellus cursus dui et orci volutpat, ut hendrerit eros vestibulum. Duis id arcu malesuada, dictum libero eget, elementum justo. Aliquam eget augue interdum, pulvinar neque a, commodo sem.
           </p>
           <span className="mt-2 float-right">
             <a href="#" className="flex items-center">
               <span className="text-sm font-semibold mr-2">Listen</span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-orange-400"viewBox="0 0 24 24"><path d="M16 10c0 2.209-1.791 4-4 4s-4-1.791-4-4v-6c0-2.209 1.791-4 4-4s4 1.791 4 4v6zm4-2v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-7 13.03v-2.03h-2v2.03c-2.282.139-4 .744-4 1.47 0 .829 2.238 1.5 5 1.5s5-.671 5-1.5c0-.726-1.718-1.331-4-1.47z"/></svg>
             </a>
           </span>
        </div>
      </div>

    </div>
  )
}

export default Episode