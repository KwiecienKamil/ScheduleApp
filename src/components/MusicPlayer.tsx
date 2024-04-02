import { useRef, useState } from "react";
import { MusicData } from "../data/MusicData";

import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import { MdOutlineSkipNext } from "react-icons/md";
import {motion} from "framer-motion"

const MusicPlayer = () => {
  const [play, setPlay] = useState(false);
  const [newSong, setNewSong] = useState("");
  const songRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (play) {
      songRef.current?.pause();
      setPlay(false);
    } else {
      songRef.current?.play();
      setPlay(true);
    }
  };
  return (
    <div className="musicPlayer">
      <div className="musicPlayer-songInfo">
        <img
          src={MusicData[0].img}
          alt="song"
          className="musicPlayer-songInfo-img"
        />
        <div className="musicPlayer-songInfo-info">
          <h6 className="musicPlayer-songInfo-info-title">
            {MusicData[0].title}
          </h6>
          <p className="musicPlayer-songInfo-info-artist">
            {MusicData[0].Artist}
          </p>
        </div>
      </div>
      <div className="musicPlayer-nav">
        <button className="musicPlayer-nav-btn">
          <MdOutlineSkipPrevious />
        </button>
        {play ? (
          <button
            onClick={toggleAudio}
            className="musicPlayer-nav-btn"
            id="musicPlayer-nav-btn-play"
          >
            <MdOutlinePauseCircleFilled />
          </button>
        ) : (
          <button
            onClick={toggleAudio}
            className="musicPlayer-nav-btn"
            id="musicPlayer-nav-btn-play"
          >
            <IoMdPlayCircle />
          </button>
        )}
        <button className="musicPlayer-nav-btn">
          <MdOutlineSkipNext />
        </button>
      </div>
      <audio ref={songRef} src={MusicData[0].mp3} />
      <div>
        <label>Add song to playlist</label>
        <input
          type="file"
          className="musicPlayer-input"
          accept="audio/mp3"
          onChange={(e) => setNewSong(e.target.value)}
        />
        <motion.button className="musicPlayer-addSong" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          Add
        </motion.button>
      </div>
    </div>
  );
};

export default MusicPlayer;
