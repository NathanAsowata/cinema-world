import Head from "next/head"
import MovieCard from "../components/MovieCard"
import styles from '../styles/Popular.module.scss'


interface propTypes {
    results: {
        id: number,
        poster_path: string,
        title: string,
        vote_average: number
    }[]
}

const TopRated = ({results}:propTypes) => {
    return(
        <>
            <Head>
                <title>Top Rated Movies</title>
                <link rel="icon" href="logo.png" />
            </Head>
            <h1 className={styles.title}>Top Rated Movies</h1>
            <main className={styles.container}>
                {results.map(movie => {
                    return <MovieCard movie={movie} key={movie.id} />
                })}
            </main>
        </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_KEY}`)
    const data = await res.json()

    return{
        props:{
            results: data.results
        }
    }
}

export default TopRated