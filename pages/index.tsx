import Head from 'next/head'
import React from 'react'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <>
      <Head>
        <title>Cinema World</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <SearchBar />
      <MovieCard />
    </>
  )
}

export default Home