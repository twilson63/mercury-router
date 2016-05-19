'use strict';

var test = require('tape');
var window = require('global/window');
var document = require('global/document');

window.history = {};
window.history.pushState = function polyPushState() {};

window.addEventListener = function polyAddEventListneer() {};
document.location = { href: '/articles?page=25' };

var router = require('../index'); //eslint-disable-line
var atom = require('../router').atom; //eslint-disable-line


test('init', function test_init(t) {
    var state = router();

    t.ok(router.render, 'has render function');
    t.ok(router.anchor, 'has anchor function');
    t.ok(router.go, 'has go function');
    t.ok(state, 'state init');
    t.end();
});

test('router', function test_router(t) {
    t.equal(atom(), document.location.href,
        'router init with full url, including query string');

    t.equal('articles', router.render({route: '/articles?page=25'}, {
        '/': function home() {
            return 'home';
        },
        '/articles': function articles() {
            return 'articles'
        }
    }), 'renders matched route');

    t.equal('fallback', router.render({route: '/books'}, {
        '/': function home() {
            return 'home';
        },
        '/articles': function articles() {
            return 'articles'
        }
    }, function fallback() { return 'fallback' }), 'renders fallback route');

    t.throws(function missingRoute() {
        router.render({route: '/books'}, {
            '/': function home() {
                return 'home';
            },
            '/articles': function articles() {
                return 'articles'
            }
        })
    }, 'throws an error if no route matches');

    t.end();
});

test('anchor', function test_anchor(t) {
    var link = '/article/5';
    var a = router.anchor({href: link});

    t.equal(a.properties.href, link, 'renders full link in href attribute');
    t.end();
});

test('go', function navigateTest(t) {
    var state = router();
    var link = '/articles?page=26';

    router.go(link);
    t.equal(state(), link, 'update route through go fn');
    t.end();
});
