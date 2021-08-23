import axios from 'axios';
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
  const name="john doe";
  let [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }


  return (
    <Router>
      <main>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">Navbar</Link>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" value={searchTerm} onChange={handleChange} aria-label="Search" />
              <Link to={`/search/${searchTerm}`}>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </Link>
            </form>
          </div>
        </nav>

        <div>
          <h1>Hello</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/search/${searchTerm}`}>Search</Link></li>
          </ul>
        </div>
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
    <h1>About {searchTerm}</h1>
    <SearchResultsPage searchTerm={searchTerm} />
  </Fragment>
  );

  // Will become the video player page, parameters need to change to video id
const Video = ({match:{params:{videoId}}}) => (
  <Fragment>
    <h1>Watching {videoId}</h1>
    <VideoPlayerPage videoId={videoId} />
  </Fragment>
  );