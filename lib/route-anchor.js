'use strict';

var h = require('virtual-dom/virtual-hyperscript');
var clickEvent = require('./click-event.js');

var routeAtom = require('./router.js').atom;

module.exports = anchor;

function anchor(props, text) {
    props['ev-click'] = clickEvent(pushState, {
        ctrl: false,
        meta: false,
        rightClick: false
    });

    return h('a', props, text);

    function pushState() {
        routeAtom.set(props.href);
    }
}
