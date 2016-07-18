"use strict";

/*
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
And:

Strict mode helps out in a couple ways:

It catches some common coding bloopers, throwing exceptions.
It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
It disables features that are confusing or poorly thought out.
*/

var express = require('express');
var React = require('react');

let app = express();

// ReactDOM.

//app.get('/', (req, res) => res.send('Hello Subash'));
// This looks for static pages, ie html page in this case, under 'public' folder
app.use(express.static('public'));

app.listen(4001);