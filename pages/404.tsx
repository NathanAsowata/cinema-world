import Head from 'next/head'
import styles from '../styles/Error.module.scss'


const Error = () => {
    return(
        <>
        <Head>
            <title>404 | Page not found</title>
            <link rel="icon" href="logo.png" />
        </Head>
            <h1 className={styles.title}>404 | This page could not be found.</h1>
        </>
    )
}

export default Error