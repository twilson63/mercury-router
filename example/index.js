var mercury = require('mercury');
var h = require('mercury').h;
var RouterComponent = require('../');
var anchor = RouterComponent.anchor;
var Router = RouterComponent; 

function App() {
  var state = mercury.state({
    title: mercury.value('Router Example'),
    route: Router()
  });
  return state;
}
    
mercury.app(document.body, App(), render);
      
function render(state) {
  return h('div', [
    h('h1', [state.title]),
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

function menu() {
  return h('ul', [
    h('li', [
      anchor({ href: '/'}, 'Home')
    ]),
    h('li', [
      anchor({ href: '/animals' }, 'Animals')
    ]),
    h('li', [
      anchor({ href: '/animals/1'}, 'Animals1')
    ])
  ]);
}

