const React = require('react');
const ReactDOM = require('react-dom');
require('./index.scss');

const {App} = require('./components/App/App.js');
ReactDOM.render(<App />, document.getElementById('todo-app'));
