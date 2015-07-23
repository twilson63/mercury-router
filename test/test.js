'use strict';

var test = require('tape');
var window = require('global/window')
var document = require('global/document');

document.location = {
  pathname: "/"
}

window.addEventListener = function polyAddEventListneer() {
  return false;
}

var router = require('../index.js');

test('[core] router init', function test(t) {
  var state = router();

  t.ok(router.render, 'has render function');
  t.ok(router.anchor, 'has anchor function');
  t.ok(state, 'state init');
  t.end()
});
