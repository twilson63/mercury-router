'use strict';

var router = require('./lib/router');
var routeView = require('./lib/route-view');

function RouterComponent() {
    return router().state;
}

function Render(state, opts) {
    return routeView(opts, state);
}

RouterComponent.anchor = require('./lib/route-anchor');
RouterComponent.render = Render;

module.exports = RouterComponent;
