System.register(['./iframe-messages', './iframe-height-notifier', '../app/main'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var iframe_messages_1, iframe_height_notifier_1, main_1;
    var KBase;
    return {
        setters:[
            function (iframe_messages_1_1) {
                iframe_messages_1 = iframe_messages_1_1;
            },
            function (iframe_height_notifier_1_1) {
                iframe_height_notifier_1 = iframe_height_notifier_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            }],
        execute: function() {
            KBase = class KBase {
                constructor() {
                    this.getParams();
                    this.messageManager = new iframe_messages_1.IFrameMessages(window, this.params.frameId);
                    this.appLauncher = new main_1.Launcher();
                }
                getParams() {
                    if (!window.frameElement.hasAttribute('data-params')) {
                        return;
                    }
                    this.params = JSON.parse(decodeURIComponent(window.frameElement.getAttribute('data-params')));
                }
                /* for now, emulate the quick hack */
                start(message) {
                    this.messageManager.request('parent', {
                        name: 'authStatus'
                    })
                        .then((authStatus) => {
                        KBase.token = authStatus.token;
                        KBase.username = authStatus.username;
                        return this.messageManager.request('parent', {
                            name: 'config'
                        });
                    })
                        .then((result) => {
                        KBase.config = result.value;
                        // I wish this would work...
                        return this.appLauncher.launch({
                            token: KBase.token,
                            username: KBase.username,
                            config: KBase.config
                        });
                    })
                        .then(() => {
                        this.iframeHeightNotifier = new iframe_height_notifier_1.IFrameHeightNotifier({
                            interval: 200,
                            messageManager: this.messageManager,
                            nodeGetter: function () {
                                return document.querySelector('md-sidenav-layout .content');
                            }
                        });
                        return this.iframeHeightNotifier.start();
                    })
                        .catch((err) => {
                        console.error('ERORR', err);
                    });
                }
                stop(message) {
                    console.log('stopping...');
                }
                go() {
                    this.messageManager.start();
                    var self = this;
                    this.messageManager.addPartner({
                        name: 'parent',
                        window: window.parent,
                        host: self.params.parentHost
                    });
                    this.messageManager.listen({
                        name: 'start',
                        handler: function (message) {
                            self.start(message);
                        }
                    });
                    this.messageManager.listen({
                        name: 'stop',
                        handler: function (message) {
                            self.stop(message);
                        }
                    });
                    this.messageManager.send('parent', {
                        name: 'ready',
                        frameId: self.params.frameId
                    });
                }
            };
            exports_1("KBase", KBase);
        }
    }
});
//# sourceMappingURL=iframe-kbase-integration.js.map