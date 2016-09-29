/*global require*/
/*jslint white:true,browser:true*/
define([
], function () {
    'use strict';
    
    function factory(config) {
        var resizeCheckInterval = config.interval,
            messageManager = config.messageManager,
            node = config.node,
            nodeGetter = config.getNode,
            lastHeight,
            intervalId;

        function sendSize() {
            messageManager.send('parent', {
                name: 'rendered',
                height: getHeight()
            });
            //console.log(document.body.offsetHeight);
            //console.log(document.body.getBoundingClientRect());
        }

        function getHeight() {
            var node = node || (nodeGetter && nodeGetter());
            if (!node) {
                return;
            }
            var rect = node.getBoundingClientRect();
            return rect.top + rect.bottom + 90;
        }

        function listenForResize() {
            lastHeight = getHeight();
            intervalId = window.setInterval(function () {
                var currentHeight = getHeight();
                if (!currentHeight) {
                    return;
                }
                if (lastHeight !== currentHeight) {
                    lastHeight = currentHeight;
                    sendSize();
                }
            }, resizeCheckInterval);
        }

        function start() {
            sendSize();
            listenForResize();
        }
        function stop() {
            if (intervalId) {
                window.clearInterval(intervalId);
            }
        }

        return {
            start: start,
            stop: stop
        };
    }
    return {
        make: function (config) {
            return factory(config);
        }
    };
});