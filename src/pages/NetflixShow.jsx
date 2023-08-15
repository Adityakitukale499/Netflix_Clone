import React from 'react'
import Row from '../components/Row/Row'
import api from '../api/api'
import Banner from '../components/Banner/Banner'
import Nav from '../components/Nav/Nav'

const NetflixShow = () => {
  return (
    <>
      <Nav/>
      <Banner/>
        <Row row={1} title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOriginals} isLargeRow/>
        <Row row={2} title="Trending Now" fetchUrl={api.fetchTrending}/>
        <Row row={3} title="Top Rated" fetchUrl={api.fetchTopRated}/>
        <Row row={4} title="Action Movies" fetchUrl={api.fetchActionMovies}/>
        <Row row={5} title="Comedy Movies" fetchUrl={api.fetchComedyMovies}/>
        <Row row={6} title="Horror Movies" fetchUrl={api.fetchHorrorMovies}/>
        <Row row={7} title="Romance Movies" fetchUrl={api.fetchRomanceMovie}/>
        <Row row={8} title="Documentaries" fetchUrl={api.fetchDocumentraries}/>
    </>
  )
}

export default NetflixShow