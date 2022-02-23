import React, { useState } from 'react';
import './App.css';
import Searchbox from './components/Searchbox';
import Loading from './components/Loading';
import SongList from './components/SongList';
import NoResult from './components/NoResult';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchfield, setSearchfield] = useState('');


  const onSearchChange = (event) => {
     setSearchfield(event.target.value)
  }

  const onSearchSong = () => {
    setSongs([]);
    setLoading(true)
      fetch(`https://www.songsterr.com/a/ra/songs.json?pattern=${searchfield}`)
        .then(response => response.json())
        .then(items => {
          if (items.length === 0) {
             setLoading(false)
          } else {
            setSongs(items); setLoading(false)
          }
        })
  }
  const currentsongs = songs
  return (
      <div>
        <Searchbox 
          searchChange={onSearchChange}
          searchSong={onSearchSong}
        />
        {
          loading
            ? <Loading />
            : songs.length===0
              ?  <NoResult></NoResult>
              :<SongList songs={currentsongs}/>
        }      
      </div>
  );
}

export default App;