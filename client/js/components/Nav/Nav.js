var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Nav = React.createClass({
      render() {
        return (
            < header className = "main-nav" >
            < ul >
            < li >
            < Link to="Home" > Home < /Link>
            <Link to="Posts">Posts</Link >
            < /li>
        </ul >
            < /header>
    );
  }

});
module.exports = Nav;