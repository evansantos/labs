var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');

var App = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function(){
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase( 'https://scorching-torch-6634.firebaseio.com/items/' )
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items} />
        <hr />
        <div className={"content " + (this.state.loaded ? "loaded" : "" )}>
          <List items={this.state.items} />
          {this.deleteButton()}
        </div>
      </div>
    </div>
  },
  deleteButton: function() {
    if(this.state.loaded || this.state.items) {
      return <div className="text-center clear-complete">
          <hr />
          <button
            type="button"
            onClick={this.onDeleteDoneClick}
            className="btn btn-default">
            Clear Complete
          </button>
        </div>
    }
    return false
  },
  onDeleteDoneClick: function(){
    for(var key in this.state.items) {
      if(this.state.items[key].done){
        this.fb.child(key).remove();
      }
    }
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
