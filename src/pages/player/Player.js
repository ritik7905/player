import React, { useState } from 'react'
import screenfull from 'screenfull';
import { BiPause, BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
// styles
import styles from "./styles.module.scss"

import { songLists } from "../../components/songLists/songLists"
import { fullscreen, volume } from "../../assets/icons/index"

const Player = () => {
  // state for song play or not
  const [play, setPlay] = useState(false)
  // state for songs lists
  const [songs, setSongs] = useState(songLists)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(0)

  const play_pause_btn = () => {
    setPlay(!play)

  }

  // FullScreen
  const expanScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }

  }
  return (
    <div className={styles.player}>
      <div className={styles.player_data}>
        <div className={styles.volume}>
          {volume}
        </div>
        <div className={styles.song_controler}>
          <div className={styles.prev}><BiSkipPrevious /></div>
          <div className={styles.song_lists}><span>01</span>/<span>12</span>  <div onClick={play_pause_btn} className={styles.btns}>{!play ? <BiPlay /> : <BiPause />}</div></div>
          <div className={styles.next}><BiSkipNext /></div>
        </div>
        <div className={styles.fullscreen} onClick={expanScreen}>{fullscreen}</div>
        <audio src="1.mp3" className={styles.player_audio}></audio>
      </div>
    </div>
  )
}

export default Player