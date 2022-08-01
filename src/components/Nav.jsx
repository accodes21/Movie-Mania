import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LaptopIcon from '@mui/icons-material/Laptop';
import Search from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
  palette:{
    primary:{
      main:'#1976d2'
  },
    text:{
      secondary:'#fff'
    },
      mode:"dark"
  }
})

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const Navigate = useNavigate();

  React.useEffect(() => {
    if(value === 0) Navigate("/");
    else if (value === 1) Navigate("/movies");
    else if (value === 2) Navigate("/series");
    else if (value === 3) Navigate("/search")
  }, [value,Navigate])
  
  return (
    <ThemeProvider theme={theme}>
    <Box sx={
        { width: '100%',
          position: 'fixed',
          bottom: 0,
          zIndex:10
        }
    }
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" 
        icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" 
        icon={<MovieCreationIcon />} />
        <BottomNavigationAction label="Series" 
        icon={<LaptopIcon />} />
        <BottomNavigationAction label="Search" 
        icon={<Search />} />
      </BottomNavigation>
    </Box>
    </ThemeProvider>
  );
}
