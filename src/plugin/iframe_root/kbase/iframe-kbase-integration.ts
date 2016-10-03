import {IFrameMessages} from './iframe-messages';
import {IFrameHeightNotifier} from './iframe-height-notifier';
import {Launcher} from '../app/main';

interface Params {
    frameId: string,
    parentHost: string
}

interface AuthStatus {
    token: string,
    username: string
}

export class KBase {
    mainNode: Node;
    params: Params;
    messageManager: IFrameMessages;
    static token: string;
    static username: string;
    static config: any;
    appLauncher: Launcher;
    iframeHeightNotifier: IFrameHeightNotifier;

    constructor() {
        this.getParams();
        this.messageManager = new IFrameMessages(
            window,
            this.params.frameId
        );
        this.appLauncher = new Launcher();
    }

    getParams() {
        if (!window.frameElement.hasAttribute('data-params')) {
            return;
        }
        this.params = <Params>JSON.parse(decodeURIComponent(window.frameElement.getAttribute('data-params')));
    }

    /* for now, emulate the quick hack */
    start(message:any) {
        this.messageManager.request('parent', {
            name: 'authStatus'
        })
        .then( (authStatus: AuthStatus) => {
            KBase.token = authStatus.token;
            KBase.username = authStatus.username;
            return this.messageManager.request('parent', {
                name: 'config'
            });
        })
        .then( (result:any) => {
            KBase.config = result.value;
            // I wish this would work...
            return this.appLauncher.launch({
                token: KBase.token,
                username: KBase.username,
                config: KBase.config
            });
        })
        .then( () => {
            this.iframeHeightNotifier = new IFrameHeightNotifier({
                interval: 200,
                messageManager: this.messageManager,
                nodeGetter: function () {
                    return document.querySelector('md-sidenav-layout .content');
                }
            });
            return this.iframeHeightNotifier.start();
        })
        .catch( (err) => {
            console.error('ERORR', err);
        })
    }

    stop(message:any) {
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
}