'use strict';

var test = require('tape');
var window = require('global/window');
var document = require('global/document');

window.addEventListener = function polyAddEventListneer() { return false; };
document.location = { href: '/articles?page=25' };

var router = require('../index');
var atom = require('../lib/router').atom;


test('init', function test(t) {
    var state = router();

    t.ok(router.render, 'has render function');
    t.ok(router.anchor, 'has anchor function');
    t.ok(state, 'state init');
    t.end();
});

test('router', function test(t) {
    var state = router();

    t.equal(
        atom(),
        document.location.href,
        'router init with full url, including query string');

    t.end();
});
