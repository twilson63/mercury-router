var Router = require('./lib/router');
var routeView = require('./lib/route-view');

RouterComponent.anchor = require('./lib/route-anchor');
RouterComponent.render = Render;

module.exports = RouterComponent;

function RouterComponent() {
 return Router().state;
}

function Render(state, opts) {
  return routeView(opts, state );
}
