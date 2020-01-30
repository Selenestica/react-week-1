import React, { Component } from 'react';
import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'

function App() {

  //useState hook
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=batman&apikey=564727fa')
    .then(response => response.json())
    .then(json => {
      setMovies(json.Search)
    })
  }, [movies])

      return (<>

      <h1>Hooks</h1>
      <h2>{count}</h2>
        <div>
          <button onClick={() => setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(count -1)}>Subtract</button>
        </div>

      {movies.map(movie => {
        return (
        <div>
          {movie.Title}
          <img src={movie.Poster} alt="batman poster" />
        </div>
        )
      })}
      </>)
  
}

export default App;


//a hook is where you hook into an existing feature...
  //such as state, componentDidMount, componentDidUpdate, context