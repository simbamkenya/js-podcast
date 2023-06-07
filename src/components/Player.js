import React from 'react'

function Player({ url }) {
  console.log('url', url)
  return (
    <div className="border border-slate-600 p-2 rounded mt-4 flex">
      <div className="pl-6 flex flex-col items-start justify-center">
        <div>
          <audio src={url} controls />
        </div>
      </div>
    </div>
  )
}

export default Player
