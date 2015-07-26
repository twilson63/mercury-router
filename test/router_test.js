'use strict';

var test = require('tape');
var document = require('global/document');

document.location = { href: '/articles?page=25' };

var atom = require('../lib/router').atom;

test('router', function test(t) {
    t.equal(
        atom(),
        document.location.href,
        'router init with full url, including query string');

    t.end();
});
