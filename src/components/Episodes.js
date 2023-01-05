import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase';
import Episode from './Episode';

function Episodes() {
    const [episodes, setEpisodes] = useState([]);

    const addEpisode = () => {

    }

    const fetchEpisodes = async () => {
        await getDocs(collection(db, "episodes"))
            .then((episodeSnapshot) => {
                const newEpisodes = episodeSnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                setEpisodes(newEpisodes);
            }).catch()
    }
    useEffect(() => {
      fetchEpisodes();
    }, []);

    console.log(episodes)

  return (
    <div className="bg-white container mx-auto">
           <div className="space-y-4">
                {/* <input type="text" placeholder="New Episode?" onChange={(e)=>setEpisodes(e.target.value)} />
                <button type="submit" className="btn" onClick={addEpisode}>Upload</button>         */}
                {episodes.map((episode, i) => (
                    <Episode key={i} episode={episode} index={i} />                        
                ))}
            </div>
    </div>
  )
}

export default Episodes