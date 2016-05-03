var React = require('react');
var Main = require('../components/main');
var Home = require('../components/home');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

module.exports = (
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
);
