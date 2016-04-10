var React = require('react');
var ReactDOM = require('react-dom');

var ListItem = require('./list-item');

module.exports = React.createClass({
  render: function() {
    var list = this.props.items.map(function(item){
        return <ListItem item={item} /> 
    });

    return <ul>
      {list}
    </ul>
  }
});
