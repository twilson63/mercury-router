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
  var anchor = require('mercury-route/anchor');
  var routeView = require('mercury-route/route-view');
  var Router = require('mercury-route/router');

  function App() {
    var state = mercury.struct({
      route: Router()
    });

    return state;
  }

  mercury.app(document.body, App(), render);

  function render(state) {
    return h('div', [
      menu(),
      routeView({
        '/': renderHome,
        '/animals': renderAnimals,
        '/animals/:id': renderAnimalItem
      }, { route: state.route })
    ])
  }

  function menu() {
    return h('ul', [
      h('li', [
        anchor({
          href: '/'
        }, 'Home')
      ]),
      h('li', [
        anchor({
          href: '/animals'
        }, 'Animals')
      ])
    ])
  }
```

## Credits

Created By [@Raynos](https://github.com/Raynos)
Tests By [@nikuda](https://github.com/nikuda)

## LICENSE

see LICENSE
