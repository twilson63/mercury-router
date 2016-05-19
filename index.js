'use strict';

var router = require('./router');
var routeView = require('./route-view');

function RouterComponent() {
    return router().state;
}

function Render(state, opts, fallback) {
    return routeView(opts, state, fallback);
}

RouterComponent.go = router.atom.set;
RouterComponent.anchor = require('./anchor');
RouterComponent.render = Render;

module.exports = RouterComponent;
