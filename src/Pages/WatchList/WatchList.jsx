import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Content from '../../components/Content/Content'

const WatchList = () => {

  const {watchlist} = useContext(GlobalContext)

  return (
    <section>
      <h1 className="title">My Watchlist</h1>
      <span style={{display:"flex", justifyContent:"center", fontSize:"1.2em"}}>Number of movies/series: {watchlist.length}</span>
      <div className="trend">
        { watchlist ? (
        watchlist.map((c) => (
          <Content
          key={c.id}
          id={c.id}
          poster={c.poster}
          title={c.title || c.name}
          date={c.date}
          media_type={c.media_type}
          vote_average={c.vote_average}
        />
        ))
      ): <h2>No movies/series in watchlist</h2>
      }
          
      </div>
    </section>
  )
}

export default WatchList