import axios from "axios";
import React from "react";
import Content from "../../components/Content/Content";
import CustomPagination from "../../components/Pagination/CustomPagination";
import './Trending.css'

const Trending = () => {

    const [page, setPage] = React.useState(1)
    const [content, setContent] = React.useState([])

    const fetchTrend = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)

        // console.log(data)
        setContent(data.results)
    }

    React.useEffect(() => {
        fetchTrend()
        // eslint-disable-next-line
    }, [page]);
    

    return(
        <section>
            <h1 className="title">Trending today</h1>
            <div className="trend">
            {content && content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
            </div>
            <CustomPagination setPage={setPage}/>
        </section>
    )
}

export default Trending;