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
import Player from './player/Player';






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

        {/* Plus sec */}
        <div className={styles.plus}><FaPlus /></div>

        <div className={styles.content_sec}>
          <div className={styles.intro}>
            <div className={styles.intro_data}>
              <div className={styles.slog}>
                <h1 className={styles.swot}>SWOT</h1>
                <h3 className={styles.anls}>
                  Analysis
                </h3>
              </div>
            </div>
          </div>
          <Player />
        </div>


        {/* Circle animation sec */}
        <div className={styles.circle}></div>
      </div>
    </div>
  )
}
