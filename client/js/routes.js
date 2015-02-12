import React from 'react';
import Router from 'react-router';
import App from './App';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

const routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home}/>
    <Route name="Home" handler={Home} />
    <Route name="Posts" handler={Posts} />
  </Route>
);

export default routes;
