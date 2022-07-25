import { Container } from '@mui/material';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Nav'
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main> 
    <Container>
      <Routes>
        <Route path="/" element={<Trending/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </Container>
    </main>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
