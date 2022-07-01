import React, { useEffect, useState } from 'react';
import { volume, fullscreen, blobImg } from "../assets/icons/index"
import { motion } from "framer-motion"
// icons
import { BiSkipPrevious, BiSkipNext, BiPlay, BiPause } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
// styles
import styles from "../styles/Home.module.scss"

import screenfull from 'screenfull';
import { songLists } from "../components/songLists/songLists"
import AOS from 'aos';
import 'aos/dist/aos.css';






export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  // state for song play or not
  const [play, setPlay] = useState(false)
  // state for songs lists
  const [songs, setSongs] = useState(songLists)

  const play_pause_btn = () => {
    setPlay(!play)
    const audio = new Audio("../assets/musics/song_1.mp3")
    // audio.load()
    audio.play()
    console.log(audio.play());
  }

  // FullScreen
  const expanScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }

  }


  return (
    <div className={styles.home}>
      <div className={styles.app__container}>
        <div className={styles.intro}>
          <div className={styles.intro_data}>
            <div className={styles.slog}>
              <div className={styles.spot}></div>
              <span className={styles.swot}>SWOT</span>
              <div className={styles.anls}>
                <div className={styles.plus} data-aos="fade-right"
                  data-aos-offset="100"
                  // data-aos-delay='1000'
                  data-aos-duration="3000"
                  data-aos-easing="ease-in"><FaPlus /></div>
                <span className={styles.analysis}>Analysis</span>
              </div>
            </div>
            <div className={styles.circle} data-aos="fade-left"
              data-aos-offset="100"
              // data-aos-delay='1000'
              data-aos-duration="3000"
              data-aos-easing="ease-in">
              <div></div>
            </div>
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
            <div className={styles.fullscreen} onClick={expanScreen}>{fullscreen}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
