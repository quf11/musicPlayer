import React, { useState, useRef } from "react";
import {
  BsCloudDownloadFill,
  BsFillPlayFill,
  BsMusicNoteBeamed,
  BsVolumeOffFill,
} from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";
import { BsSkipEndFill } from "react-icons/bs";

function PlayBar() {
  /*  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }; */

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const min = 1;
    const max = 20;

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const music = new Audio("audio/"+randomNum+".mp3");

    if (isPlaying) {
      music.pause();
    } else {
      music.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="bg-playbar sticky bottom-0 z-20 shadow">
      <div className="container mx-auto sm:flex py-.7 px-2">
        {/* image */}
        <div className="w-12 h-12 mx-5">
          <img
            className="w-full h-full"
            src="/images/poster-master.jpg"
            alt=""
          />
        </div>
        {/* description */}
        <div className="flex flex-col justify-center lg:w-56 truncate">
          <p className="text-white font-bold text-xs">Vanda mataram</p>
          <h5 className="text-subtitle font-semibold text-xs">
            Bankim Chandra
          </h5>
        </div>
        {/* icons */}
        <div className="text-white flex items-center text-md mx-16 gap-2">
          <BsMusicNoteBeamed />
          <BsFillSkipStartFill />
          {/* <audio ref={audioRef} src="audio/1.mp3" /> */}
          <BsFillPlayFill
            onClick={togglePlay}
            // className={isPlaying ? "pause-button" : "play-button"}
          />
          <BsSkipEndFill />
          <BsCloudDownloadFill />
        </div>
        {/* music bar */}
        <div className="flex items-center gap-2">
          <span className="text-white text-sm">0:00</span>
          <div className="bar">
            <input className="inputt" type="range" min="0" max="max" />
            <div className="bar2" id="bar2"></div>
            <div className="bar_dot"></div>
          </div>
          <span className="text-white text-sm">0:30</span>
        </div>
        {/* vol */}
        <div>
          <div className="vol flex items-center" style={{marginTop:"25px"}}>
            <BsVolumeOffFill className="text-white text-md bi" style={{top:"-11px"}}/>
            <input type="range" min="0" max="max" />
            <div className="vol_bar"></div>
            <div className="dot" id="vol_dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayBar;
