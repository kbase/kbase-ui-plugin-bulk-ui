/*global require*/
/*jslint white:true,browser:true*/
//require.config({
//    baseUrl: 'js/modules',
//    catchError: true
//});

define([
    'kbase/messages',
    'kbase/iframeHeightNotifier'
], function (Messages, IframeHeightNotifier) {
    'use strict';

    var main = document.getElementById('main'),
        params,
        iframeHeightNotifier,
        messageManager;


    // TODO: move into iframe api.
    function getParams() {
        if (!window.frameElement.hasAttribute('data-params')) {
            return;
        }
        return JSON.parse(decodeURIComponent(window.frameElement.getAttribute('data-params')));
    }
    params = getParams();

    console.log(params);


    


    function start(data) {
        var config = {};

        messageManager.request('parent', { name: 'authStatus' })
            .then(function (authStatus) {
                //console.log(authStatus);
                config.token = authStatus.auth.token;
                // Stuff the auth info into the window (global) object
                // -- this is our first pass at getting it into the bulk-ui
                // angular runtime.
                window.TOKEN = config.token;
                window.USERNAME = authStatus.auth.username;
                return messageManager.request('parent', { name: 'config', property: 'services.workspace.url' });
            })
            .then(function (result) {
                config.config = { workspaceUrl: result.value };
                console.log('GOT config', result);
                window.CONFIG = result.value;
                // return doOverview(config);
            })
            .then(function () {
                console.log('About to tell the system to import the app...');
                return System.import('app/vendor')
                    .then(function () {
                        return System.import('app');
                    });
            })
            .then(function () {
                iframeHeightNotifier = IframeHeightNotifier.make({
                    interval: 200,
                    messageManager: messageManager,
                    getNode: function () {
                        // TODO: determine the supported way of determining the height, or 
                        // fix the layout or css.
                        //console.log(document.querySelector('md-sidenav-layout'));
                        //console.log(document.querySelector('md-sidenav-layout .content'));
                        return document.querySelector('md-sidenav-layout .content');
                    }
                });
                iframeHeightNotifier.start();
            })
            .catch(function (err) {
                console.error('ERROR: ', err);
            });
    }

    function stop() {
        console.log('stopping...');
    }

    function go() {

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

        // This is how we sync up to the parent.
        // TODO: pass a secret token back to the parent, or the frameId
        // should be considered the secret? Yes, but better if it is a uuid or
        // something similary unguessable.
        console.log('about to send ready...');
        messageManager.send('parent', {
            name: 'ready',
            frameId: params.frameId
        });
    }

    return {
        go: go
    };
});