import { Badge } from "@mui/material";
import {FaStar} from "react-icons/fa";
import { img_300, unavailable } from "../../config/config";
import Modals from "../Modal/Modal";
import { PlaylistAdd, PlaylistAddCheck } from "@mui/icons-material";
import './Content.css'
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Content = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
    const{ addMovieToWatchlist, removeMovieFromWatchlist, watchlist} = useContext(GlobalContext)

    let storedMovie = watchlist.find(o => o.id === id);

    const watchlistDisabled = storedMovie ? true : false; 

    return(
        <Modals media_type={media_type} id={id}>
            <Badge badgeContent={vote_average>0?<span>{vote_average.toFixed(1)}<FaStar></FaStar></span>:"NR"} color={vote_average>6 ? "primary" : "secondary"}/>
            <img className="poster"
            src={ poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="movie-title" title={title}>{title}</b>
            <span className="info">
                <span>{media_type === 'tv' ? "TV Series" : "Movie"}</span>
                <span>{ date && date.substring(0, 4)}</span>
                {!watchlistDisabled ? (
                <button 
                disabled={watchlistDisabled}
                onClick={() => addMovieToWatchlist(id, poster, title, date, media_type, vote_average)}>
                     <PlaylistAdd/>
                </button>
                ) : (
                    <button 
                disabled={!watchlistDisabled}
                onClick={() => removeMovieFromWatchlist(id)}>
                     <PlaylistAddCheck/>
                </button>
                )
            }
            </span>
        </Modals>
    )
}
   
export default Content;