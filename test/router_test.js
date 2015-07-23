'use strict';

var test = require('tape');
var document = require('global/document');
var router = require('../lib/router');

test('router', function test(t) {
    document.location = { href: '/articles?page=25' };

    t.equal(
        router().state(),
        document.location.href,
        'router init with full url, including query string');

    t.end();
});
