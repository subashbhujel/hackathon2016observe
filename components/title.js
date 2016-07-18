/*  var ReactDOM = require('react-dom');

var Title = React.createClass({
    render: function() {
        return ( < div >
            Hello, world!This is a title!
            < /div>
        );
    }
});

ReactDOM.render( < Title / > , document.getElementById('app'));
*/

var React = require('react');
var ReactDOM = require('react-dom');

var Title = React.createClass({
    render: function() {
        return ( < div >
            < h1 > Title from React Component < /h1> < /div>
        );
    }
});

ReactDOM.render(React.createElement(Hello), document.getElementById('app'));