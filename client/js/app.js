import React from 'react';
import Router from 'react-router';
import Nav from './components/Nav/Nav';

let RouteHandler = Router.RouteHandler;

const App = React.createClass({
  render() {
    return (
      <div>
        < Nav />
        < RouteHandler />
      </div>
    );
  }
});

export default App;
