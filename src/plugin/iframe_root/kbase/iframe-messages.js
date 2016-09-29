System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IFrameMessages;
    return {
        setters:[],
        execute: function() {
            IFrameMessages = class IFrameMessages {
                constructor(root, name) {
                    this.root = root;
                    this.name = name;
                    this.partners = new Map();
                    this.listeners = new Map();
                    this.awaitingResponse = new Map();
                    this.id = new Date().getTime();
                    console.log('listeners', this.id, this.listeners);
                }
                start() {
                    this.root.addEventListener('message', event => {
                        console.log('received', event);
                        this.receive(event);
                    }, false);
                }
                genId() {
                    this.lastId += 1;
                    return 'msg_' + String(this.lastId);
                }
                addPartner(config) {
                    console.log('adding partner', this.id, config, this.partners);
                    this.partners.set(config.name, config);
                    console.log('added partner');
                }
                listen(listener) {
                    if (!this.listeners.has(listener.name)) {
                        this.listeners.set(listener.name, []);
                    }
                    console.log('listening for', this.id, listener);
                    this.listeners.get(listener.name).push(listener);
                }
                receive(event) {
                    var origin = event.origin || event.originalEvent.origin, message = event.data, listener, response;
                    this.receivedCount += 1;
                    if (message.id && this.awaitingResponse.has(message.id)) {
                        try {
                            response = this.awaitingResponse.get(message.id);
                            this.awaitingResponse.delete(message.id);
                            response.handler(message, event);
                            return;
                        }
                        catch (ex) {
                            console.error('Error handling response for message ', message, ex);
                        }
                    }
                    console.log('receiving message', this.id, this.listeners, event);
                    if (this.listeners.get(message.name)) {
                        this.listeners.get(message.name).forEach(function (listener) {
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
                    if (!this.partners.has(name)) {
                        throw new Error('Partner ' + name + ' not registered');
                    }
                    return this.partners.get(name);
                }
                send(partnerName, message) {
                    var partner = this.getPartner(partnerName);
                    message.from = this.name;
                    this.sentCount += 1;
                    partner.window.postMessage(message, partner.host);
                }
                sendRequest(partnerName, message, handler) {
                    var id = this.genId();
                    message.id = id;
                    this.awaitingResponse.set(id, {
                        started: new Date(),
                        handler: handler
                    });
                    this.send(partnerName, message);
                }
                request(partnerName, message) {
                    return new Promise((resolve, reject) => {
                        this.sendRequest(partnerName, message, function (response) {
                            resolve(response);
                        });
                    });
                }
            };
            exports_1("IFrameMessages", IFrameMessages);
        }
    }
});
//# sourceMappingURL=iframe-messages.js.map