import React, {Component} from 'react';
import './App.css';
import './Article.css'
import Header from './Header'
import Article from './Article'

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <div id="header-div">
          <h1>HighOnCoding</h1>
          <p>
            <b>Home</b>
          </p>
          <p>
            Categories
          </p>
        </div>
        <Header />
        <Article 
          articleTitle = "Hello WatchKit" 
          articleBody = "In this assignment, you are going to create the UI of the HighOnCoding website using React components. 
                        How would you go about dividing the HighOnCoding website into separate components. 
                        Styling is not mandatory. The main purpose of this group discussion is to talk about 
                        how would you divide the website into smaller components. " 
          articleComments = "Comments: 12"
          articleLikes = "Likes: 154"
        />
        <Article 
          articleTitle = "Hello WatchKit" 
          articleBody = "Cheesy apples" 
          articleComments = "Comments: 12"
          articleLikes = "Likes: 154"
        />
      </div>
    )
  }
}

export default App;
