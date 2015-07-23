'use strict';

module.exports = clickEvent;

function clickEvent(handler, opts) {
    opts = opts || {};

    return function clickHandler(ev) {
        if (!opts.ctrl && ev.ctrlKey) {
            return;
        }

        if (!opts.meta && ev.metaKey) {
            return;
        }

        if (!opts.rightClick && ev.which === 2) {
            return;
        }

        handler();
        ev.preventDefault();
    };
}
