require.config({
    baseUrl: 'js/modules',
    catchError: true,
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require([
    'kb/common/html',
    'kb/iframe/messages'
], function (html, Messages) {
    'use strict';

    var t = html.tag,
        div = t('div'),
        button = t('button'),
        main = document.getElementById('main'),
        params,
        messageManager,
        containerDiv;


    function getParams() {
        if (!window.frameElement.hasAttribute('data-params')) {
            return;
        }
        return JSON.parse(decodeURIComponent(window.frameElement.getAttribute('data-params')));
    }

    function renderLayout() {
        main.innerHTML = div({class: 'container-fluid'}, [
            div({class: 'row'}, [
                div({class: 'col-md-12'}, [
                    div({dataWidget: 'container'})
                ])
            ])
        ]);
        return main.querySelector('[data-widget="container"]');
    }

    function appendContent(content) {
        var div = document.createElement('div');
        div.innerHTML = content;
        containerDiv.appendChild(div);
    }

    // API

    function start(data) {
        appendContent('Starting...');
        //        
//        messageManager.sendRequest({
//            name: 'authStatus'
//        }, function (message) {
//            console.log('got auth status ', message);
//        });

        messageManager.request('parent', {name: 'authStatus'})
            .then(function (authStatus) {
                console.log('Got auth status ', authStatus);
                return messageManager.request('parent', {name: 'config', property: 'services.workspace.url'});;
            })
            .then(function (config) {
                console.log('Got config ', config);
                return config;
            })
            .catch(function (err) {
                console.error('ERROR: ', err);
            })

//        messageManager.sendRequests([
//            {name: 'authStatus'},
//            {name: 'config'}
//        ], function (messages) {
//            appendContent('Got all the messages');
//            messages.forEach(function (message) {
//                console.log()
//                console.log(message);
//            });
//        });
    }

    function stop() {
        console.log('stopping...');
    }


    // MAIN

    // Fetch params from the iframe container
    params = getParams();

    // Create our layout and handle to the top level dom node.
    containerDiv = renderLayout();

    // Our iframe message router.
    messageManager = Messages({
        root: window,
        name: params.frameId
    });
    messageManager.addPartner({
        name: 'parent',
        window: window.parent,
        host: params.parentHost
    });

    // Set up messages.
    messageManager.listen({
        name: 'start',
        handler: function (message) {
            start(message);
        }
    });
    messageManager.listen({
        name: 'stop',
        handler: function (message) {
            stop(message);
        }
    });
    messageManager.listen({
        name: 'echo',
        handler: function (message) {
            if (!message.initialCount) {
                message.initialCount = message.count;
            }
            if (message.count === 0) {
                var elapsed = (new Date()).getTime() - message.start,
                    rate = message.initialCount / (elapsed / 1000);
                console.log('Rate ', rate);
                return;
            }
            message.count -= 1;
            messageManager.send('parent', message);
        }
    });

    // Tell our parent frame that we are ready.
    messageManager.send('parent', {name: 'ready'});

    messageManager.send('parent', {name: 'echo', count: 10000, start: (new Date()).getTime()});

});