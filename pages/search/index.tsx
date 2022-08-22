import Head from "next/head"
import SearchBar from "../../components/SearchBar"
import styles from '../../styles/SearchPage.module.scss'

const Search = () => {
    return(
        <>
            <Head>
                <title>Search</title>
                <link rel="icon" href="logo.png" />
            </Head>
            <main className={styles.container}>
                <SearchBar />
                <h1 className={styles.title}>Type your search</h1>
            </main>
        </>
    )
}

export default Search