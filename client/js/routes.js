var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./App');
var Home = require('./components/Home/Home');
var Posts = require('./components/Posts/Posts');

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home}/>
    <Route name="Home" handler={Home} />
    <Route name="Posts" handler={Posts} />
  </Route>
);

module.exports = routes;
