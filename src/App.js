import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Post from './components/post/post';
import DisplayPost from './components/post/Displaypost';
import './App.css'

function App() {

  const [entries, SetEntries] = useState([])

  function addNewEntry(entry){
    let tempEntries = [entry, ...entries];

    SetEntries(tempEntries);
  }

  return (
      <div>
            <NavBar/>
            <Post addNewEntryProperty={addNewEntry}/>      
            <DisplayPost parentEntries={entries}/>
      </div>
  );
}

export default App;