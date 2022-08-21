import Head from 'next/head'
import React from 'react'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <>
      <Head>
        <title>Cinema World</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <SearchBar />
    </>
  )
}

export default Home