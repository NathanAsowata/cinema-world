import styles from '../styles/MovieCard.module.scss'
import Image from "next/image"
import Stars from "./Stars"
import { useState } from 'react'


const MovieCard = () => {



  return (
    <div className={styles.container}>
        <Image
            src={'/moviePoster.jpg'}
            alt={'Luca'}
            width={200}
            height={250}
        />
        <section className={styles.textContent}>
            <h3 className={styles.title}>Luca</h3>
            <Stars rating={4} />
        </section>
    </div>
  )
}

export default MovieCard