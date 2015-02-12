var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Nav = require('./components/Nav/Nav');

var App = React.createClass({
      render() {
    return (
      < div >

        < Nav / >

        < RouteHandler / >
      < /div>
    );
  }
});

module.exports = App;