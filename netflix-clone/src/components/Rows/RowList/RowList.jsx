import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'


function RowList() {
  return (
    <>
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchURL={requests.fetchNetflixOriginals}
        largeRow
      />
      <Row title="TRENDING MOVIES" fetchURL={requests.fetchTrending} />
      <Row title="TOP-RATED MOVIES" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries} />
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
      <Row title="TV SHOWS" fetchURL={requests.fetchTvShow} />
    </>
  );
}

export default RowList