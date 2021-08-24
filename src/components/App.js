import React, { Fragment, useState } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./App.css";

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


  return (
    <Router>
      <main>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand col-sm-3">YouTubeClone</Link>
            <form class="d-flex col-sm-5">
              <input class="form-control me-2" type="search" placeholder="Search" value={searchTerm} onChange={handleChange} aria-label="Search" />
              <Link to={`/search/${searchTerm}`}>
                <button class="btn btn-outline-success" type="submit">Search</button>
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
    <h1>Popular videos</h1>
    <HomePage />
  </Fragment>
)

// Will become the search page, parameters need to change to search query
const Search = ({match:{params:{searchTerm}}}) => (
  <Fragment>
    <h1>Results for {searchTerm}</h1>
    <SearchResultsPage searchTerm={searchTerm} />
  </Fragment>
  );

  // Will become the video player page, parameters need to change to video id
const Video = ({match:{params:{videoId}}}) => (
  <Fragment>
    <VideoPlayerPage videoId={videoId} />
  </Fragment>
  );