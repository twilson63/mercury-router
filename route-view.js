'use strict';

var routeMap = require('route-map');

module.exports = routeView;

function routeView(defn, args, fallback) {
    var match;
    var res;

    if (args.base) {
        defn = Object.keys(defn)
            .reduce(function applyBase(acc, str) {
                acc[args.base + str] = defn[str];
                return acc;
            }, {});
    }

    match = routeMap(defn);
    res = match(args.route);

    if (!res) {
        if (fallback) {
            return fallback();
        }
        throw new Error('router: no match found');
    }

    res.params.url = res.url;
    return res.fn(res.params);
}
