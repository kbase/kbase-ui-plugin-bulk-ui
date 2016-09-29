System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IFrameMessages;
    return {
        setters: [],
        execute: function () {
            IFrameMessages = class IFrameMessages {
                constructor(root, name) {
                    this.root = root;
                    this.name = name;
                    root.addEventListener('message', this.receiveMessage, false);
                }
                genId() {
                    this.lastId += 1;
                    return 'msg_' + String(this.lastId);
                }
                addPartner(config) {
                    this.partners[config.name] = config;
                }
                listenForMessage(listener) {
                    if (!this.listeners[listener.name]) {
                        this.listeners[listener.name] = [];
                    }
                    this.listeners[listener.name].push(listener);
                }
                receiveMessage(event) {
                    var origin = event.origin || event.originalEvent.origin, message = event.data, listener, response;
                    this.receivedCount += 1;
                    if (message.id && this.awaitingResponse[message.id]) {
                        try {
                            response = this.awaitingResponse[message.id];
                            delete this.awaitingResponse[message.id];
                            response.handler(message, event);
                            return;
                        }
                        catch (ex) {
                            console.error('Error handling response for message ', message, ex);
                        }
                    }
                    if (this.listeners[message.name]) {
                        this.listeners[message.name].forEach(function (listener) {
                            try {
                                listener.handler(message);
                                return;
                            }
                            catch (ex) {
                                console.error('Error handling listener for message ', message, ex);
                            }
                        });
                    }
                }
                getPartner(name) {
                    var partner = this.partners[name];
                    if (!partner) {
                        throw new Error('Partner ' + name + ' not registered');
                    }
                    return partner;
                }
                sendMessage(partnerName, message) {
                    var partner = this.getPartner(partnerName);
                    message.from = name;
                    this.sentCount += 1;
                    partner.window.postMessage(message, partner.host);
                }
                sendRequest(partnerName, message, handler) {
                    var id = this.genId();
                    message.id = id;
                    this.awaitingResponse[id] = {
                        started: new Date(),
                        handler: handler
                    };
                    this.sendMessage(partnerName, message);
                }
                request(partnerName, message) {
                    return new Promise(function (resolve, reject) {
                        this.sendRequest(partnerName, message, function (response) {
                            resolve(response);
                        });
                    });
                }
                stats() {
                    return {
                        sent: this.sentCount,
                        received: this.receivedCount,
                        name: name
                    };
                }
            };
            exports_1("IFrameMessages", IFrameMessages);
        }
    };
});
//# sourceMappingURL=iframeMessages.js.map