var React = require('react'),
    ReactDOM = require('react-dom');

var Button = require('./button');
var List = require('./list');

module.exports = React.createClass({
  handleClick: function(){
    alert('Hello Dropdown');
  },
  render: function () {
    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.props.title}
        subtTitleClassName="caret"/>
      <List items={this.props.items} />
    </div>
  }
});
