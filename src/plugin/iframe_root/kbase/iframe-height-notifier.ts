import {IFrameMessages} from './iframe-messages';

interface ConstructorParams {
    interval: number,
    messageManager: IFrameMessages,
    nodeGetter: Function
}

export class IFrameHeightNotifier {
    resizeCheckInterval: number;
    node: Node;
    nodeGetter: Function;
    lastHeight: number;
    intervalId: number;
    messageManager: IFrameMessages;

    constructor(params: ConstructorParams) {
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
       this.intervalId = window.setInterval( () => {
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

}