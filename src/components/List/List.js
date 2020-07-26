import React, { useState } from "react";
import "./List.css";
import axios from "../../api/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function List({ title, movieList, backdrop }) {
     const [movies, currentMoviesList] = useState([]);
     const [currentMovieTrailer, setTrailer] = useState([]);
     const baseImgUrl = "https://image.tmdb.org/t/p/original/";
     useState(() => {
          async function getList() {
               const req = await axios.get(movieList);
               currentMoviesList(req.data.results);
               return req;
          }
          getList();
     }, [movieList]);
     const opts = {
          height: "390",
          width: "100%",
          playerVars: {
               autoplay: 1
          }
     };
     const imageClickHandler = (mov) => {
          //currentMovieTrailer = "";
          setTrailer("");
          if (currentMovieTrailer) {
               console.log("YEs set it to null", currentMovieTrailer.length);
               setTrailer("");
          } else {
               console.log("mov", mov, mov?.name);
               movieTrailer(mov?.name || mov?.original_title)
                    .then((url) => {
                         const params = new URLSearchParams(new URL(url).search);
                         console.log("then", params, "url", url);
                         setTrailer(params.get("v"));
                    })
                    .catch((e) => {
                         console.log("No movie name", e);
                    });
          }
     };
     console.log("currentMovieTrailer", currentMovieTrailer);
     return (
          <div className='row'>
               <h3> {title} </h3>
               <div className='movies__list'>
                    {movies.map((mov) => (
                         <img
                              key={mov.id}
                              onClick={() => imageClickHandler(mov)}
                              key={`${mov.id}${mov.title}`}
                              className={`movie__thumbnail ${backdrop && "backdrop__thumbnail"}`}
                              src={`${baseImgUrl}${backdrop ? mov.poster_path : mov.backdrop_path}`}
                              alt={mov.name}
                         />
                    ))}
               </div>
               {currentMovieTrailer?.length && <Youtube videoId={currentMovieTrailer} opts={opts} />}
          </div>
     );
}
export default List;
