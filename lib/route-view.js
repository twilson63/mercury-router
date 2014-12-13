var routeMap = require('route-map');

module.exports = routeView;

function routeView(defn, args) {
    if (args.base) {
        defn = Object.keys(defn)
            .reduce(function applyBase(acc, str) {
                acc[args.base + str] = defn[str];
                return acc;
            }, {});
    }

    var match = routeMap(defn);

    var res = match(args.route);
    if (!res) {
        throw new Error('router: no match found');
    }

    res.params.url = res.url;
    return res.fn(res.params);
}
