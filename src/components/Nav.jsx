import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LaptopIcon from '@mui/icons-material/Laptop';
import Search from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


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
    <Box sx={
        { width: '100%',
          position: 'fixed',
          bottom: 0,
          backgroundColor: "#2d313a",
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
        <BottomNavigationAction style={{color: 'black'}} label="Trending" 
        icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: 'black'}} label="Movies" 
        icon={<MovieCreationIcon />} />
        <BottomNavigationAction style={{color: 'black'}} label="Series" 
        icon={<LaptopIcon />} />
        <BottomNavigationAction style={{color: 'black'}} label="Search" 
        icon={<Search />} />
      </BottomNavigation>
    </Box>
  );
}
