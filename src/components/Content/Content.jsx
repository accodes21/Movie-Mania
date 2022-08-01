import { Badge } from "@mui/material";
import {FaStar} from "react-icons/fa";
import { img_300, unavailable } from "../../config/config";
import Modals from "../Modal/Modal";
import './Content.css'

const Content = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
    return(
        <Modals media_type={media_type} id={id}>
            <Badge badgeContent={<span>{vote_average.toFixed(1)} <FaStar></FaStar></span>} color={vote_average>6 ? "primary" : "secondary"}/>
            <img className="poster"
            src={ poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="movie-title" title={title}>{title}</b>
            <span className="info">
                <span>{media_type === 'tv' ? "TV Series" : "Movie"}</span>
                <span>{date}</span>
            </span>
        </Modals>
    )
}
   
export default Content;