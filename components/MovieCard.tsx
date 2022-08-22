import styles from '../styles/MovieCard.module.scss'
import Image from "next/image"
import Stars from "./Stars"
import { useRouter } from 'next/router'



interface propTypes {
  movie: {
    id: number,
    poster_path: string,
    title: string,
    vote_average: number
  }
}

const MovieCard = ({movie}:propTypes) => {

  const router = useRouter()
  const showMovieDetails = () => {
    router.push(`/details/${movie.id}`)
}

  return (
    <div className={styles.container} onClick={showMovieDetails}>
        <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width={200}
            height={250}
            layout={'responsive'}
        />
        <section className={styles.textContent}>
            <h3 className={styles.title}>{movie.title}</h3>
            <Stars rating={movie.vote_average} />
        </section>
    </div>
  )
}

export default MovieCard