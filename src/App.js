import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
    <Banner />
      {/* here the rows the parent thing in the netlix clone */}
 
 {/* fetchurl where we can pull the information */}
 <Row title = "NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals}
  isLargerRow 
 />
 <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
 <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
 <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
 <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
 <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
 <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
 <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
 <h2 className='created'>Created by Mohammed Suhail</h2>
    </div>
  );
}

export default App;

