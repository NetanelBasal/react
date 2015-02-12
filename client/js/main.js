import $ from 'jquery';
import React from 'react';
import Router from 'react-router';

Router.run(require('./routes'), (Handler) => {
  React.render( < Handler / > , document.getElementById("main"));
});