# Mercury RouterComponent

This is a mercury router component from Raynos : https://gist.github.com/adbf7951bee3fdfe1a65

Mercury is a FRP JS framework based on the idea of tiny modules: https://github.com/Raynos/mercury

[![Build Status](https://travis-ci.org/twilson63/mercury-router.svg?branch=master)](https://travis-ci.org/twilson63/mercury-router)

## Install

```
npm install mercury-router
```

## API

Mecury Router looks for two state attributes:

* base: This attribute defines the base route of the router
* route: This attribute defines the current/default route

## Usage

``` js
var mercury = require('mercury');
var h = require('mercury').h;
var RouterComponent = require('mercury-router');
var anchor = RouterComponent.anchor;
var Router = RouterComponent;

function App() {
  var state = mercury.state({
    base: '/',
    route: Router()
  });
  return state;
}

mercury.app(document.body, App(), render);

function render(state) {
  return h('div', [
    menu(),
    RouterComponent.render(state, {
      '/': function() {
        return h('h1', ['Home']);
      },
      '/animals': function() {
        return h('h1', ['Animals']);
      },
      '/animals/:id': function(params) {
        return h('h1', ['Animals ' + params.id]);
      }
    })
  ]);
}

```

## Credits

Created By [@Raynos](https://github.com/Raynos)
Tests By [@nikuda](https://github.com/nikuda)

## LICENSE

see LICENSE



