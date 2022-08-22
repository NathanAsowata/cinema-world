import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.scss'

const Home = () => {
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
    </>
  )
}

export default Home