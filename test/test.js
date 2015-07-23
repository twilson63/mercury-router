'use strict';

global.test = require('tape');

global.window = require('global/window');
global.window.addEventListener = function polyAddEventListneer() {
  return false;
}

global.document = require('global/document');
global.document.location = { href: "/" };

require('./index_test.js');
require('./router_test.js');
