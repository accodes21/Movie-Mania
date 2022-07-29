import React from "react";
import axios from "axios";
import { Button, Tab, Tabs, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Content from "../../components/Content/Content";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Search = () => {

    const [type, setType] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [content, setContent] = React.useState([])
    const [numOfPages, setNumOfPages] = React.useState()
    const [searchText, setSearchText] = React.useState("")

    const theme = createTheme({
        palette:{
            mode:"dark"
        }
      })

      const fetchSearch = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

        // console.log(data);
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }

    React.useEffect(() => {
        window.scroll(0,0)
        fetchSearch()
        // eslint-disable-next-line
    }, [page,type]);

    return(
        <>
        <ThemeProvider theme={theme}>
            <div style={{display:"flex", margin:"10px 0 15px 0"}}>
                <TextField 
                style={{flex:1}} 
                id="filled-basic" 
                label="Search" 
                variant="filled"
                onChange={(e) => setSearchText(e.target.value)}
                 />
                <Button variant="contained" 
                style={{marginLeft:10}}
                onClick={fetchSearch}
                > 
                    <SearchIcon/> 
                </Button>
            </div>

            <Tabs 
            value={type} 
            centered
            onChange={(e,newVal) => {
                setType(newVal)
                setPage(1)
            }}
            >
                <Tab style={{width:"50%"}} label="Search Movies"/>
                <Tab style={{width:"50%"}} label="Search Series"/>
            </Tabs>
        </ThemeProvider>
        <div className="trend">
            {content && content.map((c) => (
            <Content
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type?"tv":"movie"}
              vote_average={c.vote_average}
            />
          ))}
          {searchText && !content && (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
            </div>
            {numOfPages > 1 &&(
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
            )}
        </>
    )
}

export default Search;