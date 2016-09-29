System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IFrameHeightNotifier;
    return {
        setters:[],
        execute: function() {
            IFrameHeightNotifier = class IFrameHeightNotifier {
                constructor(params) {
                    this.resizeCheckInterval = params.interval;
                    this.messageManager = params.messageManager;
                    this.nodeGetter = params.nodeGetter;
                }
                getHeight() {
                    var node = node || (this.nodeGetter && this.nodeGetter());
                    if (!node) {
                        return;
                    }
                    var rect = node.getBoundingClientRect();
                    return rect.top + rect.bottom + 90;
                }
                sendSize() {
                    this.messageManager.send('parent', {
                        name: 'rendered',
                        height: this.getHeight()
                    });
                }
                listenForResize() {
                    this.lastHeight = this.getHeight();
                    this.intervalId = window.setInterval(() => {
                        var currentHeight = this.getHeight();
                        if (!currentHeight) {
                            return;
                        }
                        if (this.lastHeight !== currentHeight) {
                            this.lastHeight = currentHeight;
                            this.sendSize();
                        }
                    }, this.resizeCheckInterval);
                }
                start() {
                    this.sendSize();
                    this.listenForResize();
                }
                stop() {
                    if (this.intervalId) {
                        window.clearInterval(this.intervalId);
                    }
                }
            };
            exports_1("IFrameHeightNotifier", IFrameHeightNotifier);
        }
    }
});
//# sourceMappingURL=iframe-height-notifier.js.map