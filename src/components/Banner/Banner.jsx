import React, { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../api/api'
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3${api.fetchNetflixOriginals}`)
            setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)])
            return res
        }
        fetchData()
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <>
            <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                    backgroundPosition: "center center",
                }}
            >
                <div className="banner-contents">
                    <h1 className="banner-title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner-buttons">
                        <button className="banner-button">Play</button>
                        <button className="banner-button">My List</button>
                    </div>
                    <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>

                </div>
                <div className="banner-fadeBottom"></div>
            </header>
        </>
    )
}

export default Banner