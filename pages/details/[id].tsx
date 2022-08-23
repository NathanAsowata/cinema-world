import Head from "next/head"
import Image from "next/image"
import Stars from "../../components/Stars"
import styles from '../../styles/Details.module.scss'


interface propTypes {
    details: {
        backdrop_path: string,
        original_title: string,
        vote_average: number,
        vote_count: number,
        runtime: number,
        status: string,
        overview: string,
        release_date: string,
        genres: {
            name: string
        }[]
        spoken_languages: {
            english_name: string
        }[]
        budget: number,
        production_companies: {
            name: string
        }[]
    }
}

const Details = ({details}:propTypes) => {
    return(
        <>
            <Head>
                <title>Movie Details</title>
                <link rel="icon" href="logo.png" />
            </Head>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                    alt={details.original_title}
                    width={500}
                    height={200}
                    layout={'responsive'}
                />
                <main className={styles.container}>
                    <h1>{details.original_title}</h1>
                    <Stars rating={details.vote_average} />
                    <div>
                        <span>{details.vote_count.toLocaleString()} Reviews </span> |
                        <span> {details.runtime} mins</span> |
                        <span> {details.status}</span>
                    </div>
                    <p><strong>Storyline</strong> - {details.overview}</p>
                </main>
        </>
    )
}

export const getServerSideProps = async (context:any) => {
    const movieId = context.params.id

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_KEY}`)
    const data = await res.json()

    return {
        props: {
            details: data
        }
    }
} 

export default Details