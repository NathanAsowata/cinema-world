import SearchBar from '../../components/SearchBar'
import MovieCard from '../../components/MovieCard'
import styles from '../../styles/SearchPage.module.scss'


interface propTypes {
    searchResults: {
        id: number,
        poster_path: string,
        title: string,
        vote_average: number
    }[]
}

const SearchPage = ({searchResults}: propTypes) => {
    return(
        <main className={styles.container}>
            <SearchBar />
            <section className={styles.results}>
                {searchResults.map(movie => {
                    return <MovieCard movie={movie} key={movie.id} />
                })}
            </section>
        </main>
    )
}

export const getServerSideProps = async (context:any) => {
    const searchQuery = context.params.userInput
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&query=${searchQuery}`)
    const data = await res.json()
    
    return {
        props: {
            searchResults: data.results
        }
    }
}

export default SearchPage