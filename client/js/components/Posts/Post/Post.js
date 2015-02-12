var React = require('react');

var Post = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
});

module.exports = Post;
