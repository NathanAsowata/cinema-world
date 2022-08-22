import Head from 'next/head'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.scss'


interface propTypes {
  movies: {
    id: number,
    poster_path: string,
    title: string,
    vote_average: number
  }[]
}

const Home = ({movies}:propTypes) => {
  
  return (
    <>
      <Head>
        <title>Cinema World</title>
        <link 
          rel='icon' 
          href='logo.png' 
        />
        <meta 
          name='description' 
          content='Cinema World is a web app that allows to find any movie of your choice'
        />
      </Head>
      <header className={styles.header}>
        <h1>Explore millions of movies and TV shows</h1>
        <SearchBar />
      </header>
      <h1 className={styles.subHeading}>Trending Movies</h1>
      <section className={styles.trendingSection}>
        {movies ? movies.map(movie => {
          return(
            <MovieCard movie={movie} key={movie.id} />
          )
        }): <h1>Loading</h1>}
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
 
  const res = await fetch(`https://api.themoviedb.org/3//trending/movie/week?api_key=${process.env.REACT_APP_KEY}`)
  const data = await res.json()
  
  return  {
    props: {
      movies: data.results
    }
  }
}

export default Home