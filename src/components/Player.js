import React from 'react'

function Player({ url }) {
  console.log('url', url)
  return (
    <div className="border border-slate-600 p-2 rounded mt-4 flex">
      <div className="md:pl-6 flex flex-col items-start justify-center">
        <audio src={url} controls />
      </div>
    </div>
  )
}

export default Player
