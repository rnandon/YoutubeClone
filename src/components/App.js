import axios from 'axios';
import { validateCLIOptions } from 'jest-validate';
import { get } from 'jquery';
import React, { Fragment, useState } from 'react';
import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./App.css";

// Notes:
// - Nav section will become the main navbar
// - Switch needs to call actual components instead of just the fragments below

// get popular videos
async function getPopularVideos() {
    const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=US&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg');

    console.log('data', response.data);
}
getPopularVideos().catch(console.error);

// get search results
const searchTerm = "f1";

async function getSearchResults() {
  const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`);

  console.log('data', response.data);
}
getSearchResults().catch(console.error);


export default function App() {
  const name="john doe";
  let [searchParameters, setSearchParameters] = useState("");
  const handleChange = (event) => {
    setSearchParameters(event.target.value);
  }


  return (
    <Router>
      <main>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">Navbar</Link>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" value={searchParameters} onChange={handleChange} aria-label="Search" />
              <Link to={`/search/${searchParameters}`}>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </Link>
            </form>
          </div>
        </nav>

        <div>
          <h1>Hello</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/search/${name}`}>About</Link></li>
            <li><Link to="/video">Video</Link></li>
          </ul>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:name"  component={Search} />
          <Route path="/video"  component={Video} />
        </Switch>
      </main>
    </Router>
  )
}

// Will become the home page for the app
const Home = () => (

  <Fragment>
    <h1>Home</h1>
    <p></p>
  </Fragment>
)

// Will become the search page, parameters need to change to search query
const Search = ({match:{params:{name}}}) => (
  <Fragment>
    <h1>About {name}</h1>
  </Fragment>
  );

  // Will become the video player page, parameters need to change to video id
const Video = ({history}) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={ () => history.push('/') } >Go to home</button>
  </Fragment>
  );