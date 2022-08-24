import Head from "next/head"
import Image from "next/image"
import Stars from "../../components/Stars"
import styles from '../../styles/Details.module.scss'


interface propTypes {
    details: {
        backdrop_path: string,
        title: string,
        vote_average: number,
        vote_count: number,
        overview: string,
        poster_path: string,
        status: string,
        spoken_languages: {
            english_name: string
        }[]
        genres: {
            id: number,
            name: string
        }[]
        production_companies: {
            id: number,
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
            <header>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                    alt={details.title}
                    width={500}
                    height={250}
                    layout={'responsive'}
                    className={styles.heroImage}
                />
                <section className={styles.heroContent}>
                    <h1>{details.title}</h1>
                    <p> <Stars rating={details.vote_average} /> | {details.vote_count} Reviews</p>
                    <p>{details.overview}</p>
                </section>
            </header>
            <h2 className={styles.subheading}>More Details</h2>
            <main className={styles.main}>
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
                    alt={details.title}
                    width={200}
                    height={350}
                />
                <div className={styles.details}>
                    <p className={styles.name}>Status</p>
                    <p>{details.status}</p><br />
                    <p className={styles.name}>Language</p>
                    <p>
                            {details.spoken_languages.map((language, index) => {
                            return <p key={index}>{language.english_name}</p>
                        })}
                    </p><br />
                    <p className={styles.name}>Genre</p>
                    <p>
                        {details.genres.map(genre => {
                            return <p key={genre.id}>{genre.name}</p>
                        })}
                    </p><br />
                    <p className={styles.name}>Production</p>
                    <p>
                        {details.production_companies.map(company => {
                            return <p key={company.id}>{company.name}</p>
                        })}
                    </p>


                </div>
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