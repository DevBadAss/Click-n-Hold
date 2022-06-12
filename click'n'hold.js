export default class ClicknHold {
    constructor(target, callback) {
        this.target = target;
        this.callback = callback;
        this.onHold = false;
        this.activeTimeoutId = null;

        ["mousedown", "touchstart"].forEach(evt => {
            this.target.addEventListener(evt, this._HoldStart.bind(this));
        });

        ["mouseup", "mouseleave", "touchend", "touchcancel"].forEach(evt => {
            this.target.addEventListener(evt, this._HoldEnd.bind(this));
        });
    }

    _HoldStart() {
        this.onHold = true;
        this.activeTimeoutId = setTimeout(() => {
            if (this.onHold === true) {
                this.callback();
            }
        }, 1000);
    }

    _HoldEnd() {
        this.onHold = false;
        clearTimeout(this.activeTimeoutId);
    }

}