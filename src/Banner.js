import React,{useEffect, useState} from 'react'
import axios from './axios'
import requests from './request';
import './Banner.css'

function Banner() {
  
    const[movie,setMovie] = useState([]); // we have to change the banner with each referesh so we are using this

 useEffect(() =>{ // is piece of code which runs on the condition
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]); // we want only one image in the banner here it will give all the image
     return request;
    }
    fetchData()
 },[]);   //here [] it runs only once inside the banner funciton

console.log(movie);

// here we will write function which will give ... if the description is too long

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;

}

  return (
        // {/* background image*/}
        // {/* title */}
        // {/* div for 2 buttons */}
        // {/* description */}
        //header is for background 
        //div contents
    <header className='banner'
       style = {{
         backgroundSize: "cover",
         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
         backgroundPosition: "center center",
       }}
    >

        <div className="banner__contents">
            <h1 className='banner__title'>
                {movie?.title || movie?.original_name || movie?.name} {/* here if the title doesn't exists then the original name will be display like basically a or function to tackle the edge cases*/}
            </h1>
            {/* div.banner__buttons>button.banner__button*2   shortcut to create div and button in single line*/}
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className='banner_desc'>
                {truncate(movie?.overview, 150)}
            </h1>
        </div>
        <div className="banner--fadeBottom"></div> {/* empty div for fade feature*/}
    </header>
  )
}

export default Banner
