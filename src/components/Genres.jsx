import { Chip } from "@mui/material";
import axios from "axios";
import React from "react";

const Genres = ({
    type,
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    setPage
}) => {

    const fetchGenres = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

        setGenres(data.genres);

        // genres = Array.from(data.genres)
        console.log(data.genres)
    }

    console.log(genres)


    React.useEffect(() => {
        fetchGenres()
        return () => {
            setGenres([])
        }
        // eslint-disable-next-line
    }, []);

    return(
        <div style={{ padding: "6px 0" }}>
            { genres && genres.map((genre) => (
                <Chip 
                label={genre.name}
                color="primary"
                style={{margin: "2px"}}
                clickable
                key={genre.id}
                />
            ))}
        </div>
    )
}

export default Genres;