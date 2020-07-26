import React, { Component } from "react";
import "./App.css";
import List from "./List/List";
import requests from "../api/requests";
import Poster from "./Poster/Poster";
import Navbar from "./Navbar/Navbar";

class App extends Component {
     state = {};
     render() {
          return (
               <div className='netflix-clone'>
                    <Navbar />
                    <Poster />
                    <List backdrop title='Netflix Originals' movieList={requests.getNetflixOriginals} />
                    <List title='Trending Now' movieList={requests.getTrending} />
                    <List title='Top Rated' movieList={requests.getTopRated} />
                    <List title='Action' movieList={requests.getActionMovies} />
                    <List title='Comedy' movieList={requests.getComedyMovies} />
                    <List title='Horror' movieList={requests.getHorrorMovies} />
                    <List title='Documented' movieList={requests.getDocumentaries} />
               </div>
          );
     }
}

export default App;
