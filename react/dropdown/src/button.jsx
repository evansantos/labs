var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass( {
  render: function () {
    return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
      {this.props.title}
      <span className={this.props.subtTitleClassName}>{this.props.subTitle}</span>
    </button>
  }
} ) ;
