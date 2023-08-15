import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube';
// import ytSearch from 'yt-search'

const baseUrl = 'https://image.tmdb.org/t/p/original'

const Row = ({ row, title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const responce = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`)
            setMovies(responce.data.results);
            return responce;
        }
        fetchData()
    }, [fetchUrl])
    // console.log('movies' ,movies);
    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=ea6ad38b8056dca4c2bba7df8220e73d&append_to_response=videos`)
            console.log(result.data?.videos?.results[0].key);
            setTrailerUrl(result?.data?.videos?.results[0].key)
        }
    }
    const opts = {
        height: '250',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }
    const slideLeft = () => {
        var slider = document.getElementById(`row-${row}`);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById(`row-${row}`);
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row-posters" id={`row-${row}`}>
                <i className="fa-solid fa-angles-left" onClick={slideLeft} ></i>
                {movies && movies.map((movie) => (
                    <img src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id} className={`row-poster ${isLargeRow && "row-posterLarge"}`} onClick={() => handleClick(movie)} />
                ))}
                <i className="fa-solid fa-angles-right" onClick={slideRight}></i>
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row