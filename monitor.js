'use strict'

module.exports = scenario;

function scenario(log, cb) {
    let value = 97;
    log.info({value: value}, 'scenario');

    function start() {
        process.nextTick(thing);
    }

    function foo() {
        value *= 13;
        log.info({value: value}, 'foo');

        cb(value);
    }

    start();

    function racer() {
        value &= 255;
        log.info({value: value}, 'racer');
        // setTimeout(foo, 0);
        process.nextTick(thing);
    }

    value = 213;
    log.info({value: value}, 'scenario');

    function thing() {
        value += 131;
        log.info({value: value}, 'thing');
        process.nextTick(racer);
    }
}