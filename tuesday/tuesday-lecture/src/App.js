import React, {Component} from 'react';
import './App.css';
import './Counter.css'
import './DisplayCounter.css'
import MovieList from './MovieList'
import Counter from './Counter'
import DisplayCounter from './DisplayCounter'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      movies: []
    }
  }

  //when comp is added to virtual DOM (remember the virt DOM is the hierarchy of components)
  //this detects whether something was added to a Component
  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch('http://www.omdbapi.com/?s=batman&apikey=564727fa')
    .then(response => response.json())
    .then(json => {
      this.setState({
        movies: json.Search
      })
    })
  }

  //detects change on a textbox
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value 
    })
  }

  render() {
    return (
      <>
        <h1>Movies</h1>
        <input type="text" onChange={this.handleChange} />
        <MovieList movies = {this.state.movies} />
        <Counter />
        <DisplayCounter />
      </>
    )
  }
}

export default App;


