import axios from "axios";
import React from "react";
import Content from "../../components/Content/Content";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres";
import useGenres from "../../hooks/useGenres";

const Series = () => {

    const [page, setPage] = React.useState(1);
    const [content, setContent] = React.useState([])
    const [numOfPages, setNumOfPages] = React.useState()
    const [genres, setGenres] = React.useState([]);
    const [selectedGenres, setSelectedGenres] = React.useState([]);
    const genreforURL = useGenres(selectedGenres)

    const fetchSeries = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)

        // console.log(data);
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }

    React.useEffect(() => {
        fetchSeries()
        // eslint-disable-next-line
    }, [page,genreforURL]);

    return(
        <section>
        <h1 className="title"> Discover Series</h1>
        <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
        <div className="trend">
            {content && content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
            </div>
            {numOfPages>1 &&
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
            }
        </section>
    )
}

export default Series;