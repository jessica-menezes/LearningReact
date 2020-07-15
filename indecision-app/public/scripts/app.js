'use strict';

console.log('App.js is running');

//JSX - Javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'This is some text',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Raul Smells'
        ),
        React.createElement(
            'li',
            null,
            'Raul Smells a lot'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    RenderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    RenderCounterApp();
};
var reset = function reset() {
    count = 0;
    RenderCounterApp();
};

var appRoot = document.getElementById('app');

var RenderCounterApp = function RenderCounterApp() {
    var templateTwo = //className used not class
    React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

RenderCounterApp();
