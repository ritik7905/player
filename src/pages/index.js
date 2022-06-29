import React, { useEffect, useState } from 'react';
import { volume, fullscreen, blobImg } from "../assets/icons/index"
import { motion } from "framer-motion"
// icons
import { BiSkipPrevious, BiSkipNext, BiPlay, BiPause } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
// styles
import styles from "../styles/Home.module.scss"

// import screenfull from 'screenfull';
// import { songLists } from "../components/songLists/songLists"





export default function Home() {
  // state for song play or not
  const [play, setPlay] = useState(false)
  // state for songs lists
  const [songList, setSongsLists] = useState(1)

  const play_pause_btn = () => {
    if (play) {
      setPlay(false)
    } else if (!play) {
      setPlay(true)
    }
  }

  // useEffect(() => {
  //   const fullScreen = document.getElementById('fullscreen');
  //   fullScreen.addEventListener("click", ()=>{
  //     if (screenfull.isEnabled) {
  //       screenfull.toggle();
  //     }

  //   })
  // }, [])
  return (
    <div className={styles.home}>
      <div className={styles.app__container}>
        <div className={styles.intro}>
          <div className={styles.intro_data}>
            <div className={styles.slog}>
              <div className={styles.spot}></div>
              <span className={styles.swot}>SWOT</span>
              <div className={styles.anls}>
                <div className={styles.plus}><FaPlus /></div>
                <span className={styles.analysis}>Analysis</span>
              </div>
            </div>
            <div className={styles.circle}></div>
          </div>
        </div>
        <div className={styles.player}>
          <div className={styles.player_data}>
            <div className={styles.volume}>
              {volume}
            </div>
            <div className={styles.song_controler}>
              <div className={styles.prev}><BiSkipPrevious /></div>
              <div className={styles.song_lists}><span>01 / 12</span> <span onClick={play_pause_btn} className={styles.btns}>{!play ? <BiPlay /> : <BiPause />}</span></div>
              <div className={styles.next}><BiSkipNext /></div>
            </div>
            <div className={styles.fullscreen} id="fullscreen">{fullscreen}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
