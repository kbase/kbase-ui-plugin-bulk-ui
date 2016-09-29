/*global define*/
/*jslint white:true,browser:true */
define([
    'kb/common/html',
    './messages'
], function (html, Messages) {
    'use strict';
    function factory(config) {
        var container,
            runtime = config.runtime,
            t = html.tag,
            div = t('div'),
            iframe = t('iframe'),
            widgets = {},
            messageManager = Messages({
                root: window,
                name: 'parent'
            }),
            bunchCount = 2,
            frame4Id;

        function handleRuntimeMessage(data) {

        }

        function receiveMessage(event) {
            var origin = event.origin || event.originalEvent.origin,
                message = event.data;
            // console.log('panel received: ', origin, message);
            switch (message.name) {
                case 'say':
                    var frame = container.querySelector('[data-frame="' + message.to + '"]');
                    if (frame) {
                        frame.contentWindow.postMessage(message, 'http://localhost:8080');
                    }
                    break;
                case 'runtime':
                    var frame = container.querySelector('[data-frame="' + message.to + '"]');
                    var response = handleRuntimeMessage(data);
                    if (frame) {
                        frame.contentWindow.postMessage(response, 'http://localhost:8080');
                    }
                    break;
                case 'ready':
                    sendMessage(event.source, {
                        name: 'start'
                    });
                    break;
                case 'authStatus':
                    sendMessage(event.source, {
                        id: message.id,
                        auth: {
                            token: runtime.service('session').getAuthToken()
                        }
                    });
                    break;
                case 'config':
                    sendMessage(event.source, {
                        id: message.id,
                        config: {
                            what: 'This will be the config'
                        }
                    });
                    break;
                case 'echo':
                    sendMessage(event.source, message);
                    break;
            }
        }

        function sendMessage(to, message) {
            var targetWindow;
            if (typeof to === 'string') {
                targetWindow = container.querySelector('[data-frame="' + to + '"]').contentWindow;
            } else {
                targetWindow = to;
            }
            // console.log('sending message ', to, message, targetWindow);
            if (targetWindow) {
                targetWindow.postMessage(message, 'http://localhost:8080');
            }
        } 

        function renderBunchOfWidgets(n) {
            var i, frameNumber, content = '';
            for (i = 0; i < n; i += 1) {
                var frameNumber = 100 + i;
                content +=  div({class: 'row'}, [
                        div({class: 'col-md-12'}, [
                            html.makePanel({
                                title: 'iFrame Remote Loading Example ' + i,
                                content: iframe({
                                    dataFrame: 'frame_' + frameNumber, 
                                    dataParams: encodeURIComponent(JSON.stringify({
                                        parentHost: 'http://localhost:8080',
                                        frameId: 'frame_'+frameNumber,
                                        objectRef: '4079/2/1'
                                    })),
                                    style: {width: '100%', height: 'auto', border: '0px green dotted'}, 
                                    src: 'http://localhost:9001/index.html'})
                            })
                        ])
                ]);
            };
            return content;
        }

        function render() {
            frame4Id = html.genId();
            container.innerHTML = div({class: 'container-fluid'}, [
                renderBunchOfWidgets(bunchCount)
//                div({class: 'row'}, [
//                    
//                    div({class: 'col-md-6'}, [
//                        html.makePanel({
//                            title: 'iFrame Example 4',
//                            content: iframe({
//                                dataFrame: 'frame4',
//                                dataParams: encodeURIComponent(JSON.stringify({
//                                    parentHost: 'http://localhost:8080',
//                                    frameId: 'frame4'
//                                })),
//                                style: {width: '100%', height: '300px', border: '1px green dotted'},
//                                src: '/modules/plugins/widget-iframe-demo/frames/demo4/index.html'})
//                        })
//                    ])
//                ]),
//                div({class: 'row'}, [
//                    div({class: 'col-md-6'}, [
//                        html.makePanel({
//                            title: 'iFrame Example 1',
//                            content: iframe({
//                                dataFrame: 'demo1',
//                                dataParams: encodeURIComponent(JSON.stringify({
//                                    parentHost: 'http://localhost:8080'
//                                })),
//                                style: {width: '100%', height: '300px', border: '1px green dotted'},
//                                src: '/modules/plugins/widget-iframe-demo/frames/demo1/index.html'})
//                        })
//                    ]),
//                    div({class: 'col-md-6'}, [
//                        html.makePanel({
//                            title: 'iFrame Example 2',
//                            content: iframe({
//                                dataFrame: 'demo2',
//                                dataParams: encodeURIComponent(JSON.stringify({
//                                    parentHost: 'http://localhost:8080',
//                                    partner: 'demo1'
//                                })),
//                                style: {width: '100%', height: '300px', border: '1px green dotted'},
//                                src: '/modules/plugins/widget-iframe-demo/frames/demo2/index.html'})
//                        })
//                    ])
//                ]),
//                div({class: 'row'}, [
//                    div({class: 'col-md-6'}, [
//                        html.makePanel({
//                            title: 'iFrame Example 1',
//                            content: iframe({
//                                dataFrame: 'demo3',
//                                dataParams: encodeURIComponent(JSON.stringify({
//                                    parentHost: 'http://localhost:8080'
//                                })),
//                                style: {width: '100%', height: '300px', border: '1px green dotted'},
//                                src: '/modules/plugins/widget-iframe-demo/frames/demo1/index.html'})
//                        })
//                    ]),
//                    div({class: 'col-md-6'}, [
//                        html.makePanel({
//                            title: 'iFrame Example 1',
//                            content: iframe({
//                                dataFrame: 'demo4',
//                                dataParams: encodeURIComponent(JSON.stringify({
//                                    parentHost: 'http://localhost:8080',
//                                    partner: 'demo3'
//                                })),
//                                style: {width: '100%', height: '300px', border: '1px green dotted'},
//                                src: '/modules/plugins/widget-iframe-demo/frames/demo2/index.html'})
//                        })
//                    ])
//                ])
            ]);
        }
        
        function addBunchOfPartners(n) {
            var i, frameNumber;
            for (i = 0; i < n; i += 1) {
                frameNumber = 100 + i;                
                messageManager.addPartner({
                    name: 'frame_' + frameNumber,
                    window: container.querySelector('[data-frame="frame_'+frameNumber+'"]').contentWindow,
                    host: 'http://localhost:9001'
                });
            }
        }
        
        function addBunchOfPartners2(n) {
            var i, frameNumber, partners = {}, id;
            for (i = 0; i < n; i += 1) {
                frameNumber = 100 + i;  
                id = 'frame_' + frameNumber;
                partners[id] = {
                    name: id,
                    window: container.querySelector('[data-frame="frame_'+frameNumber+'"]').contentWindow,
                    host: 'http://localhost:9001'
                };
            }
            return partners;
        }

        // API

        function init(config) {

        }
        function attach(node) {
            container = node;
        }
        function start(params) {
            // window.addEventListener('message', receiveMessage, false);
            
            render();

            messageManager.listen({
                name: 'echo',
                handler: function (message) {
                    messageManager.send(message.from, message);
                }
            });
            
            var waitingPartners = addBunchOfPartners2(bunchCount);
            
            console.log('waiting partners', waitingPartners);

//            messageManager.addPartner({
//                name: 'frame4',
//                window: container.querySelector('[data-frame="frame4"]').contentWindow,
//                host: 'http://localhost:8080'
//            });

            function findWaiting(frameWindow) {
                var keys = Object.keys(waitingPartners), i;
                for (i = 0; i < keys.length; i += 1) {
                    var key = keys[i], partner = waitingPartners[key];
                    if (frameWindow === partner.window) {
                        return partner;
                    }
                }
            }
            

            messageManager.listen({
                name: 'ready',
                handler: function (message, event) {
                    
                    // Now we only add the parter after the initial handshake.
                    
                    // Do we have the partner?
                    var source = event.source,
                        waitingPartner = findWaiting(source);
                    
                    if (!waitingPartner) {
                        console.error('Not a waiting parter ', source, waitingPartners);
                        throw new Error('Not a waiting parter');
                    }
                                        
                    // frameId = source.frameElement.getAttribute('data-frame'),
                    delete waitingPartners[waitingPartner.name];
                    
                    messageManager.addPartner({
                        name: waitingPartner.name,
                        window: source,
                        host: waitingPartner.host
                    });
                    
                    console.log('Sending to ' + waitingPartner.name);
                    messageManager.send(waitingPartner.name, {
                        name: 'start',
                        config: {
                            frameId: waitingPartner.name,                            
                            host: 'http://localhost:8080'
                        },
                        params: {
                            objectRef: '4079/2/1'
                        }
                    });
                }
            });
            
            messageManager.listen({
                name: 'authStatus',
                handler: function (message) {
                    messageManager.send(message.from, {
                        name: 'authStatus',
                        id: message.id,
                        auth: {
                            token: runtime.service('session').getAuthToken()
                        }
                    });
                }
            });
            
            messageManager.listen({
                name: 'config',
                handler: function (message) {
                    messageManager.send(message.from, {
                        name: 'config',
                        id: message.id,
                        value: runtime.config(message.property)
                    });
                }
            });
            
            messageManager.listen({
                name: 'rendered',
                handler: function (message, event) {
                    // adjust height of source window...
                    var height = message.height; // event.source.contentWindow.height;
                    var iframe = document.querySelector('[data-frame="' + message.from + '"]');
                    iframe.style.height = height + 'px';
                }
            });

            

//            sendMessage('demo3', {
//                objectRef: '1052/30/1',
//                authToken: runtime.service('session').getAuthToken(),
//                workspaceUrl: runtime.config('services.workspace.url')
//            });
//            sendMessage('demo4', {
//                id: 'start'
//            });
        }
        function stop() {

        }
        function detach() {

        }
        function destroy() {

        }

        return {
            init: init,
            attach: attach,
            start: start,
            stop: stop,
            detach: detach,
            destroy: destroy
        };
    }

    return {
        make: function (config) {
            return factory(config);
        }
    };
});