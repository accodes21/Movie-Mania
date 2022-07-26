import { img_300, unavailable } from "../../config/config";
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
        <div className="media">
            <img className="poster"
            src={ poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="movie-title">{title}</b>
            <span className="info">
                <span>{media_type === 'tv' ? "TV Series" : "Movie"}</span>
                <span>{date}</span>
            </span>
        </div>
    )
}
   
export default Content;