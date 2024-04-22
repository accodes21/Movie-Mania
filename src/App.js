import { Container } from '@mui/material';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Nav'
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Search';
import WatchList from './Pages/WatchList/WatchList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
    <Header/>
    <main> 
    <Container>
      <Routes>
        <Route path="/" element={<Trending/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/watchlist" element={<WatchList/>}/>
      </Routes>
    </Container>
    </main>
    <SimpleBottomNavigation/>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
