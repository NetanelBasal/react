var $ = require('jquery');
var React = require('react');
var Router = require('react-router');

Router.run(require('./routes'), (Handler) => {
  React.render( < Handler / > , document.getElementById("main"));
});