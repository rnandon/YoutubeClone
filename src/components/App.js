import React, { Fragment, useState } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./App.css";
import image from '../components/images/youtubelogo.png';

import SearchResultsPage from './Pages/SearchResultsPage';
import VideoPlayerPage from './Pages/VideoPlayerPage';
import HomePage from './Pages/HomePage';

// Notes:
// - Nav section will become the main navbar
// - Switch needs to call actual components instead of just the fragments below

export default function App() {
  let [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  //<img src={image} alt="youtubelogo"></img>

  return (
    <Router>
      <main>
        <nav class="navbar navbar-dark">
          <div class="container-fluid py-3">
            <Link to="/" class="navbar-brand col-sm-3"><h1 id="header">YouTubeClone</h1></Link>
              <form class="d-flex col-sm-5">
                <input class="form-control me-2" id="searchbar" type="search" placeholder="Search" value={searchTerm} onChange={handleChange} aria-label="Search" />
                <Link to={`/search/${searchTerm}`}>
                  <button class="btn" id="searchButton" type="submit"><i class="fa fa-search"></i></button>
                </Link>
              </form>
            <div class="col-sm-2"></div>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:searchTerm"  component={Search} />
          <Route path="/video/:videoId"  component={Video} />
        </Switch>
      </main>
    </Router>
  )
}

// Will become the home page for the app
const Home = () => (

  <Fragment>
    <div class="container-fluid">
      <HomePage />
    </div>
  </Fragment>
)

// Will become the search page, parameters need to change to search query
const Search = ({match:{params:{searchTerm}}}) => (
  <Fragment>
    <div class="container-fluid me-3">
      <h1>Results for {searchTerm}</h1>
      <SearchResultsPage searchTerm={searchTerm} />
    </div>
  </Fragment>
  );

  // Will become the video player page, parameters need to change to video id
const Video = ({match:{params:{videoId}}}) => (
  <Fragment>
    <div class="container-fluid me-3">
      <VideoPlayerPage videoId={videoId} />
    </div>
  </Fragment>
  );