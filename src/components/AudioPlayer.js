import {  useState, useEffect, useRef } from "react";
import { BsArrowLeftShort} from "react-icons/bs"
import { BsArrowRightShort} from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"


function AudioPlayer(props) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    //references
    const audioPlayer = useRef()
    const progressBar = useRef()
    const animationRef = useRef()

 
    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue)
        if(!prevValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else{
            audioPlayer.current.pause()
            animationRef.current = cancelAnimationFrame(whilePlaying)
        }
    }

    useEffect(() => {
       const seconds = Math.floor(audioPlayer.current.duration);
       setDuration(seconds);
       progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime()
    }
    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }
    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value/duration*100}%`)
        setCurrentTime(progressBar.current.value)
    }

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs/60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(secs % 60)
        const returnedSecs = seconds < 10 ? `0${seconds}` : `${seconds}`

        return `${returnedMinutes}:${returnedSecs}`
    }


    return (
    <div className=" p-4 flex item-center">
        <div className="flex items-center w-full">
        <button
            className="bg-gray-600 bg-none rounded-full w-[75px] h-[75px] text-lg flex text-[#ffd200] justify-center items-center"
            onClick={togglePlayPause}>
                {isPlaying ? <FaPause/> : <FaPlay className="relative left-[5px]"/>}
            </button>
            {/* current Time */}
            <div className="ml-[25px] text-white font-semibold mr-2 text-lg">
                {calculateTime(currentTime)}
            </div>

            {/* progress bar appreaance-none outline-no*/} 
            <div className="flex-1">
                <input type="range" className="w-full appearance-none rounded outline-none bg-[#ffe3d4] border-0 text-[#ffc2a1] border-r-[10px] relative w-full h-[11px] [&::-webkit-slider-range-thumb]:bg-red-200 pointer z-2 border-box" defaultValue="0" ref={progressBar} onChange={changeRange}/>
            </div>
            {/* duration */}
            <div className="text-white font-semibold ml-2 text-lg">
            {(duration && ! isNaN(duration)) && calculateTime(duration)}
            </div>
        </div>
    
        <audio ref={audioPlayer} src="https://firebasestorage.googleapis.com/v0/b/js-podcast-8137b.appspot.com/o/functional-programming.mp3?alt=media&token=117c10ad-31f8-432f-ace8-1621d69bbde1"/>
    </div>
    
    );
}

export default AudioPlayer;