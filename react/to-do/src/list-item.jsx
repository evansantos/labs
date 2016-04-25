var React = require('react');
var Firebase = require('firebase');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase( 'https://scorching-torch-6634.firebaseio.com/items/' + this.props.item.key );
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox"
          checked={this.state.done}
          onChange={this.handleDoneChange}/>
      </span>
      <input type="text" className="form-control"
        value={this.state.text}
        onChange={this.handleTextChange}
        disabled={this.state.done} />
      <span className="input-group-btn">
        {this.changesButtons()}
        <button
          className="btn btn-default"
          onClick={this.handleDeleteClick}>
          Delete
        </button>
      </span>
    </div>
  },
  changesButtons: function(){
    if(this.state.textChanged){
      return [
        <button
          onClick={this.handleSaveClick}
          className="btn btn-default">
          Save
        </button>,
        <button
          onClick={this.handleUndoClick}
          className="btn btn-default">
          Undo
        </button>
      ]
    }
    return null
  },
  handleTextChange: function(event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    })
  },
  handleDoneChange: function(event){
    var update = { done: event.target.checked }
    this.setState( update );
    this.fb.update( update );
  },
  handleSaveClick: function(){
    this.fb.update({text: this.state.text});
    this.setState({textChanged: false});
  },
  handleUndoClick: function(){
    this.setState({
      text: this.props.item.text,
      textChanged: false
    })
  },
  handleDeleteClick: function (){
    this.fb.remove();
  }
});
