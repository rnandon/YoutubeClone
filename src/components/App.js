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

// get popular videos
async function getPopularVideos(data) {
  const response = await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&regionCode=US&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg');

  return {
    data: {
      data: response.data
    }
  }
}

//let data = [getPopularVideos()];

// getPopularVideos(data).catch(console.error);
//console.log('data items', data.items)

//getPopularVideos().catch(console.error);

// get search results
const searchTerm = "f1"; // use this variable to store a search term, which is then inserted in axios request

async function getSearchResults() {
  const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`);

  console.log('data', response.data);
}
//getSearchResults().catch(console.error);

// get a specific video using it's id
const currentVideoId = "TJgUiZgX5rE";

async function getVideo() {
  const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${currentVideoId}&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`);

  console.log('video', response.data);
}
//getVideo().catch(console.error);

// get a related videos using current VideoId
// use the currentVideoId above
async function getRelatedVideos() {
  const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${currentVideoId}&type=video&key=AIzaSyCrQ8epCYClv4Shg5vi1y3u4-BC4PGq7Mg`);

  console.log('data', response.data);
}
//getRelatedVideos().catch(console.error);



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