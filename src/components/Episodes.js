import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../firebase'
import Episode from './Episode'
import Hosts from './Hosts'
import Header from './Header'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import AudioPlayer from './AudioPlayer'

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
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <Hosts />
        {/* <AudioPlayer /> */}
        
        <div className="grid  md:grid-cols-1 gap-2">
          {/* <div className="text-4xl font-semibold flex text-center col-start-1 col-end-3 flex items-center justify-center">Episodes</div> */}
          {episodes.map((episode, i) => (
            <div className='mx-auto'>
              <div className='font-bold'>
                <span className='oldstyle-nums'><p className='uppercase text-white text-[1.8em] font-normal'>Episode</p> <span className='text-[6em] text-[gold]'>{`0${++i}`} </span></span>
                <span className="ml-2 text-4xl text-white tracking-tight max-w-2xl inline-block">{episode.title}</span>
              </div>
              <Episode key={i} episode={episode} index={i} />
            </div>
            
          ))}
        </div>
      </div>
      <div className="py-24 bg-center px-8 bg-[url('https://plus.unsplash.com/premium_photo-1664195074951-fe91ec456eed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80')]">
          <h1 className="text-4xl text-white font-extrabold py-2">DON'T MISS OUR WEEKLY EPISODES!</h1>
          <p className="text-white text-base leading-5 max-w-md py-2 leading-8">Subscribe to get notified when our episodes drop. We drop episode weekly to our listeners and you have a chance to receive an early notification</p>
          <div>
            <input className="px-8 py-4 rounded-full border-2 bg-transparent outline-none mr-4 text-white" placeholder='EMAIL' type="text"/>
            <button className="px-8  py-4 rounded-full bg-white hover:bg-yellow hover:text-yellow ">SUBSCRIBE</button>
          </div>
      </div>
    </div>
  )
}

export default Episodes
