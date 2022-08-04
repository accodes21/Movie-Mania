import axios from "axios";
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Content from "../../components/Content/Content";
import './Trending.css';
const Trending = () => {

    const [page, setPage] = React.useState(1)
    const [content, setContent] = React.useState([])
    const [dataLength, setDataLength] = React.useState(0)

    const fetchTrend = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        console.log('fetching more data.')
        console.log(data)
        setContent([...content, ...data.results])
        setDataLength(data.total_pages)
        console.log("page value: " + page + ' data length: ' + dataLength)
        console.log('done fetching more data.')
    }

    React.useEffect(() => {
        fetchTrend()
        // eslint-disable-next-line
    }, [page]);


    return (
        <section>
            <h1 className="title">Trending today</h1>
            <InfiniteScroll
                dataLength={content.length}
                next={() => setPage(
                    prevPage => prevPage + 1
                )}
                hasMore={page < dataLength}
                loader={
                    <p style={{ textAlign: 'center' }}>
                        <b>Loading...</b>
                    </p>
                }
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
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
            </InfiniteScroll>
        </section>
    )
}

export default Trending;