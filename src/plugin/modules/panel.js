/*global define*/
/*jslint white:true,browser:true */

define([
    'bluebird',
    'kb/common/html',
    './host/iframeMessages',
    'bootstrap'
], function (
    Promise,
    html,
    IframeMessages
    ) {
    'use strict';

    var t = html.tag,
        div = t('div'),
        iframe = t('iframe'),
        table = t('table'), tr = t('tr'), th = t('th'), td = t('td');

    function factory(config) {
        var container,
            runtime = config.runtime,
            iframeMessages = IframeMessages.makeHost({
                root: window,
                name: 'panel'
            });


        // VIEW

//        function updateStats() {
//            var stats = iframeMessages.stats(),
//                content = table({class: 'table table-striped'}, [
//                    Object.keys(stats).map(function (key) {
//                        return tr([th(key), td(String(stats[key]))]);
//                    })
//                ]);
//            container.querySelector('[data-element="stats"]').innerHTML = content;
//        }

        function makeIframe() {
            var frameNumber = 1,
                frameId = 'frame_' + frameNumber,
                parentHost = 'http://localhost:8080',
                iframeHost = 'http://localhost:8080',
                iframeIndex = '/modules/plugins/bulk-ui/iframe_root/dist/index.html',
                iframeUrl = iframeHost + iframeIndex,
                content = div({class: 'container-fluid', style: {
                        border: '0px blue dotted'
                    }}, [
                    // div({dataElement: 'stats'}),
                    iframe({
                        dataFrame: 'frame_' + frameNumber,
                        dataParams: encodeURIComponent(JSON.stringify({
                            parentHost: 'http://localhost:8080',
                            frameId: 'frame_' + frameNumber
                        })),
                        style: {
                            width: '100%', 
                            height: 'auto'
                        },
                        frameborder: 0,
                        scrolling: 'no',
                        src: iframeUrl
                        // src: '/modules/plugins/bulk-ui/iframe_test/index.html'
                    })
                ]);
            return {
                parentHost: parentHost,
                host: iframeHost,
                frameNumber: frameNumber,
                frameId: frameId,
                content: content
            };
        }

        // API

        function attach(node) {
            return Promise.try(function () {
                console.log('in attach...');
                container = node;
            });
        }

        function start(params) {
            return Promise.try(function () {
                var embeddedIframe = makeIframe();
                
                runtime.send('ui', 'setTitle', 'Bulk Upload');

                container.innerHTML = embeddedIframe.content;

                iframeMessages.listen({
                    name: 'ready',
                    handler: function (message) {
                        console.log('GOT READY!', message);
                        if (message.frameId !== embeddedIframe.frameId) {
                            console.error('Unexpected "ready"', message);
                            return;
                        }
                        iframeMessages.addPartner({
                            name: message.frameId,
                            host: embeddedIframe.host,
                            window: container.querySelector('[data-frame="frame_'+ embeddedIframe.frameNumber+'"]').contentWindow,
                        });
                        
                        // updateStats();
                        
                        iframeMessages.send(message.from, {
                            name: 'start'
                        });
                    }
                });

                iframeMessages.listen({
                    name: 'rendered',
                    handler: function (message) {
                        var height = message.height,
                            iframe = container.querySelector('[data-frame="frame_'+ embeddedIframe.frameNumber+'"]');
                        iframe.style.height = height + 'px';
                    }
                });
                
                iframeMessages.listen({
                    name: 'authStatus',
                    handler: function (message) {
                        iframeMessages.send(message.from, {
                            name: 'authInfo',
                            id: message.id,
                            token: runtime.service('session').getAuthToken(),
                            username: runtime.service('session').getUsername()
                        });
                    }
                });
                
                iframeMessages.listen({
                    name: 'configProperty',
                    handler: function (message) {
                        iframeMessages.send(message.from, {
                            name: 'config',
                            id: message.id,
                            value: runtime.config(message.property)
                        });
                    }
                });

                iframeMessages.listen({
                    name: 'config',
                    handler: function (message) {
                        iframeMessages.send(message.from, {
                            name: 'config',
                            id: message.id,
                            value: runtime.rawConfig()
                        });
                    }
                });

                // updateStats();
            });
        }

        function stop() {
            return Promise.try(function () {

            });
        }

        return {
            attach: attach,
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