import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../firebase'
import Episode from './Episode'
import Hosts from './Hosts'
import Header from './Header'

function Episodes() {
  const [episodes, setEpisodes] = useState([])

  const fetchEpisodes = async () => {
    await getDocs(collection(db, 'episodes'))
      .then((episodeSnapshot) => {
        const newEpisodes = episodeSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))

        setEpisodes(newEpisodes)
      })
      .catch()
  }
  useEffect(() => {
    fetchEpisodes()
  }, [])
  console.log(episodes)

  return (
    <>
      <div className="bg-red-100 container mx-auto mt-2">
        {/* <Hosts /> */}
        <div className="space-y-4">
          {episodes.map((episode, i) => (
            <Episode key={i} episode={episode} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Episodes
