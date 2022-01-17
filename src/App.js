import React from 'react';
import './App.css';
import DisplayPosts from './components/DisplayPosts';
import CreatePosts from './components/CreatePosts';


function App() {
  return (
    <div className="App">
      <CreatePosts/>
      <DisplayPosts/>
    </div>
  );
}

export default App;
