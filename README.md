# Mercury Router [![Build Status](https://travis-ci.org/twilson63/mercury-router.svg?branch=master)](https://travis-ci.org/twilson63/mercury-router)

This is a router component for [Mercury](https://github.com/Raynos/mercury), a FRP JS framework based on the idea of
tiny modules.

## Install

```
npm install mercury-router
```

## API

Mecury Router looks for two state attributes:

* `base` – This attribute defines the base route of the router
* `route` – This attribute defines the current/default route

## Usage

* `router()` – initialise mercury router state in app state
* `router.render(routes:Object)` – route path/view mapping in app render
* `router.anchor(attributes:Object, children:VTree|String)` – navigate via `a` html element
* `router.go(url:String)` – navigate to url directly

See [example](example/) for a minimal working implementation.

## Contributors

* Created by [@Raynos](https://github.com/Raynos) in
https://gist.github.com/adbf7951bee3fdfe1a65
* [@nikuda](https://github.com/nikuda)
* [@twilson63](https://github.com/twilson63)

## License

**MIT** [LICENSE](LICENSE)
