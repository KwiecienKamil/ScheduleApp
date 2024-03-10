import { MusicData } from "../data/MusicData"

const MusicPlayer = () => {
  return (
    <div className="musicPlayer">
      <div className="musicPlayer-songInfo">
        <img src={MusicData[0].img} alt="song" className="musicPlayer-songInfo-img"/>
        <div className="musicPlayer-songInfo-info">
        <h6 className="musicPlayer-songInfo-info-title">{MusicData[0].title}</h6>
        <p className="musicPlayer-songInfo-info-artist">{MusicData[0].Artist}</p>
        </div>
      </div>
      <div className="musicPlayer-nav"></div>
    </div>
  )
}

export default MusicPlayer
