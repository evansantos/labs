var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', //button title
  items: [ //Itens to show in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

var element = React.createElement( Dropdown, options ) ;

ReactDOM.render(element,document.querySelector('.container')) ;
