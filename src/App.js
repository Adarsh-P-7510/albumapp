import logo from './logo.svg';
import './App.css';
import AddAlbum from './components/AddAlbum';
import AlbumSearch from './components/AlbumSearch';
import DeleteAlbum from './components/DeleteAlbum';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddAlbum/>}/>
      <Route path='/AlbumSearch' element={<AlbumSearch/>}/>
      <Route path='/DeleteAlbum' element={<DeleteAlbum/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
