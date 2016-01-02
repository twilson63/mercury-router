'use strict';

var value = require('observ');
var source = require('geval/source');
var window = require('global/window');
var document = require('global/document');


var atom = router.atom = value(String(document.location.href));

function router(channels_map) {
    var inPopState = false;
    var popstates = popstate();

    popstates(onPopState);
    atom(onRouteSet);

    return { state: atom };

    function onPopState(uri) {
        inPopState = true;
        atom.set(uri);
    }

    function onRouteSet(uri) {
        if (inPopState) {
            inPopState = false;
            return;
        }

        pushHistoryState(uri);
    }
}

function pushHistoryState(uri) {
    window.history.pushState(null, document.title, uri);
}

function popstate() {
    return source(function broadcaster(broadcast) {
        window.addEventListener('popstate', onPopState);

        function onPopState() {
            broadcast(String(document.location.href));
        }
    });
}

module.exports = router;
