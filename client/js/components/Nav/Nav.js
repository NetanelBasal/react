import React from 'react';
import Router from 'react-router';

let Link = Router.Link;

const Nav = React.createClass({
  render() {
    return (
      <header className = "main-nav" >
        <ul>
          <li>
            <Link to="Home">Home </Link>
            <Link to="Posts">Posts</Link>
          </li>
        </ul>
      </header>
    );
  }
});

export default Nav;
