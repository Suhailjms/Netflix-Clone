//this is component the name starts with caps;
import React,{useState , useEffect} from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";

// state - to keep track of movies , to store a info-- a way to write varibles in react

 function Row({title, fetchUrl, isLargerRow}){
    const[movies, setMoives] = useState([]);
    const[trailerUrl , setTrailerUrl] = useState("");

// A snippet of code which runs based on a sepcific condition/variables
 // like feeding the information to the row like giving the url of movie
  useEffect(()=>{
     //if [] ,  run once when the row loads, and don't run again mainly pafe reload
   // here we r using async function to fetch the data from the 3rd party and we are using await to wait for the data to comeback 
     async function fetchData(){
        const request = await axios.get(fetchUrl);
       console.log(request);
       setMoives(request.data.results); //  the data we recived by the rquest will be set to the movies 
       return request;  //  to know what the data is comming back we can see that in console by
        //fetchUrl--https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
   }
   fetchData();  //  we have to call the function outside in async function
  },[fetchUrl]);  // we have to call the fetchUrl in async
// basically fetchUrl is outside the async function it may change so we should update that so we are including that
const opts = {
    heigth:"390",
    width:"100%",
    playerVars: {
        autoplay: 1,
    },
};
console.log(movies); //  which will give the table structure format 

const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
            // here v is link of https://www.youtube.com/watch?v=ssdfgsd
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => {
          console.log(error);
          // Handle the error, e.g., show a message to the user
        });
    }
  };
  

return (
        <div className="row">
            <h2>{title}</h2>
<div className="row__posters">
    {/* several row posters */}

    {movies.map(movie=>(
        <img 
         key ={movie.id} // for re render which is no use it will be faste to scroll
        onClick={()=> handleClick(movie)}
         className={`row_poster ${isLargerRow && "row__posterLarge"}`}
        src={`${base_url}${isLargerRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
    ))}
   
{/* container to store image */}
</div>
 {/* <p className="created-by">Created by Mohammed Suhail</p> */}
 {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}
        </div>
    )
}


 export default Row;

 //ctrl+shift+q