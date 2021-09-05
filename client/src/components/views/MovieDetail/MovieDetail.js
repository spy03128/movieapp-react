import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";

function MovieDetail(props) {
  let movieId = props.match.params.movieId;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      });
  }, []);

  return (
    <div>
      {/* {Header} */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
        title={movie.original_title}
        text={movie.overview}
      />
      {/* {body} */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        {/* {Movie Info} */}
        <MovieInfo movie={movie} />

        <br />
        {/* {Actors Grid} */}

        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <button>Toggle Actors Views</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
