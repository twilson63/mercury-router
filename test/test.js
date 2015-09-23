'use strict';

var test = require('tape');
var window = require('global/window');
var document = require('global/document');

window.addEventListener = function polyAddEventListneer() { return false; };
document.location = { href: '/articles?page=25' };

var router = require('../index');
var anchor = router.anchor;
var atom = require('../router').atom;


test('init', function test_init(t) {
    var state = router();

    t.ok(router.render, 'has render function');
    t.ok(router.anchor, 'has anchor function');
    t.ok(state, 'state init');
    t.end();
});

test('router', function test_router(t) {
    t.equal(
        atom(),
        document.location.href,
        'router init with full url, including query string');

    t.end();
});

test('anchor', function test_anchor(t) {
    var link = '/article/5';
    var a = anchor({href: link});

    t.equal(a.properties.href, link, 'renders full link in href attribute');
    t.end();
});
