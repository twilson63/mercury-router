'use strict';

var test = require('tape');
var document = require('global/document');
var mercury_router = require('../index');

test('init', function test(t) {
    document.location = {href: '/'};

    var state = mercury_router();

    t.ok(mercury_router.render, 'has render function');
    t.ok(mercury_router.anchor, 'has anchor function');
    t.ok(state, 'state init');
    t.end();
});
