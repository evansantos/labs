var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function() {
    return <li>
      <a>{this.props.item}</a>
    </li>
  }
});
