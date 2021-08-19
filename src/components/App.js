import React, { Fragment } from 'react';
import reactDom from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default function App() {
  const name = "John Doe"
  return (
    <Router>
      <main>
        <nav>
          <h1>Hello</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about/${name}`}>About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:name"  component={About} />
          <Route path="/contact"  component={Contact} />
        </Switch>
      </main>
    </Router>
  )
}

// Will become the home page for the app
const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
)

// Will become the search page, parameters need to change to search query
const About = ({match:{params:{name}}}) => (
  <Fragment>
    <h1>About {name}</h1>
  </Fragment>
  );

  // Will become the video player page, parameters need to change to video id
const Contact = ({history}) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={ () => history.push('/') } >Go to home</button>
  </Fragment>
  );