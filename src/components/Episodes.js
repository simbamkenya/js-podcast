import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../firebase'
import Episode from './Episode'
import Hosts from './Hosts'
import Header from './Header'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'

function Episodes() {
  const [episodes, setEpisodes] = useState([])
  const [episodesData, setEpisodesData] = useState([])
  const storage = getStorage()
  const [currentEpisode, setCurrentEpisode] = useState('')

  const listRef = ref(storage)
  const urls = []

  console.log('data', urls)

  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          let downloadUrl = getDownloadURL(ref(storage, itemRef))
          downloadUrl
            .then((url) => {
              urls.push(url)
              console.log(url)
            })
            .catch((err) => 'error in fetching audio')
        })
      })
      .catch((error) => {
        console.log(error)
      })
    setEpisodesData(urls)
  }, [])
  console.log('urls', urls)

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

  console.log('urllData', episodesData.length)

  return (
    <>
      <div className="bg-red-100 container mx-auto mt-2">
        <Hosts />
        
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="text-4xl font-semibold flex text-center col-start-1 col-end-3 flex items-center justify-center">Episodes</div>
          {episodes.map((episode, i) => (
            <Episode key={i} episode={episode} index={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Episodes
