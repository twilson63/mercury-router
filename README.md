# Mercury RouterComponent

This is a mercury router component from Raynos : https://gist.github.com/adbf7951bee3fdfe1a65

Mercury is a FRP JS framework based on the idea of tiny modules: https://github.com/Raynos/mercury

## Install

```
npm install mercury-router
```

## Usage

``` js
var mercury = require('mercury');
var h = require('mercury').h;
var RouterComponent = require('mercury-router');
var anchor = RouterComponent.anchor;
var Router = RouterComponent; 

function App() {
  var state = mercury.state({
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






