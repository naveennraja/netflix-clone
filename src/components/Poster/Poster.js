import React, { useState } from "react";
import axios from "../../api/axios";
import request from "../../api/requests";
import "./Poster.css";
const Poster = () => {
     const baseImgUrl = "https://image.tmdb.org/t/p/original";
     const [movie, setstate] = useState([]);
     useState(() => {
          async function getBannerData() {
               const req = await axios.get(request.getTrending);
               setstate(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
               console.log(req.data.results);
               //console.log();
               return req;
          }
          getBannerData();
     }, []);
     console.log(movie);
     function makeEllipsis(str, n) {
          return str?.length > n ? str.substr(0, n - 1) + "..." : str;
     }
     return (
          <header
               className='poster__header'
               style={{
                    backgroundImage: `url(${baseImgUrl}${movie?.backdrop_path})`
               }}>
               <div className='poster__container'>
                    <h2 className='poster__heading'> {movie?.title || movie?.description || movie?.original_name}</h2>
                    <div className='poster__actions'>
                         <button className='play'>Play</button>
                         <button className='list'>My List</button>
                    </div>
                    <h2 className='poster__description' title={movie?.overview}>
                         {makeEllipsis(movie?.overview, 150)}
                    </h2>
               </div>
               <div className='gradient__bottom'></div>
          </header>
     );
};

export default Poster;
