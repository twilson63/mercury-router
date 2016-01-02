'use strict';

var value = require('observ');
var source = require('geval/source');
var window = require('global/window');
var document = require('global/document');
var routeMap = require('route-map');


var atom = router.atom = value(String(document.location.href));

function router(channels_map, args) {
    
    
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

        if(channels_map){
          if (args && args.base) {
              channels_map = Object.keys(channels_map)
                  .reduce(function applyBase(acc, str) {
                      acc[args.base + str] = channels_map[str];
                      return acc;
                  }, {});
          }

          var match = routeMap(channels_map);

          var res = match(args.route);
          if (res) {
            res.params.url = res.url;
            res.fn(res.params);
          }
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
