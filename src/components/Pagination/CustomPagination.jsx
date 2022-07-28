import { createTheme, Pagination, ThemeProvider } from "@mui/material";

const theme = createTheme({
    palette:{
        mode:"dark"
    }
})

const CustomPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }
    return(
        <div
        style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:"10px",
            marginBottom:"10px"
        }}
        >
        <ThemeProvider theme={theme}>
            <Pagination 
            count={numOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)}
            color="primary"
            hideNextButton
            hidePrevButton
            />
        </ThemeProvider>
        </div>
    )
}

export default CustomPagination;