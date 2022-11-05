import React, { useEffect, useState } from "react";
import MovieCard from "../../component/movieCard/MovieCard";
import axios from "axios";

const API_KEY = "56c4aff7d80acc92e50623f3b248f031";
const FEATURED_API = `https://api.themoviedb.org/3/descover/movie?sorth_by=popularity.desc&api_key=${API_KEY}&page=1`;

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getMovie(FEATURED_API);
  }, []);
  const getMovie = async (api) => {
    try {
      const {
        data: { results },
      } = await axios.get(api);
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movies);
  return (
    <div className="movieContainer">
      {movies.map((item)=>{
        return(
          
        )
      })}
      <MovieCard />
    </div>
  );
};

export default Home;
