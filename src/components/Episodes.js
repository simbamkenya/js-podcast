import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase';

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
    <div className="bg-teal-300 container mx-auto">
           <div>
                <input
                    type="text"
                    placeholder="New Episode?"
                    onChange={(e)=>setEpisodes(e.target.value)}
                />
                  <button
                            type="submit"
                            className="btn"
                            onClick={addEpisode}
                        >
                            Upload
                   </button>

                   {episodes.map((episode, i) => (
                        <div className="bg-gray-100">
                            <h1 key={i} className="text-lg text-red-900 font-bold">Title: {episode.title}</h1>
                        </div>
                   ))}
            </div>
    </div>
  )
}

export default Episodes