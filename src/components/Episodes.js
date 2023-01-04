import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';

function Episodes() {
    const [episodes, setEpisodes] = useState();

    const fetchEpisodes = async () => {
        await getDocs(collection(db, "js-podcast"))
            .then((episodeSnapshot) => {
                const newEpisodes = episodeSnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                setEpisodes(newEpisodes);
            }).catch()
    }
    useEffect(() => {
      fetchEpisodes();
    }, [])

  return (
    <div className="bg-teal-300 container mx-auto">
        
    </div>
  )
}

export default Episodes