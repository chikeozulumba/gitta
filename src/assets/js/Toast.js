'use strict';

export function Toast (options) {

    if (!options.message) {
        throw new Error('Toast.js - You need to set a message to display');
    }

    this.options = options;
    this.options.type = options.type || 'default';

    this.toastContainerEl = document.querySelector('.toastjs-container');
    this.toastEl = document.querySelector('.toastjs');

    this._init();
}

Toast.prototype._createElements = function () {
    const _this = this;

    return new Promise(((resolve, reject) => {

        _this.toastContainerEl = document.createElement('div');
        _this.toastContainerEl.classList.add('toastjs-container');
        _this.toastContainerEl.setAttribute('role', 'alert');
        _this.toastContainerEl.setAttribute('aria-hidden', true);

        _this.toastEl = document.createElement('div');
        _this.toastEl.classList.add('toastjs');

        _this.toastContainerEl.appendChild(_this.toastEl);
        document.body.appendChild(_this.toastContainerEl);

        setTimeout(() => {
            return resolve();
        }, 500);
    }));
};

Toast.prototype._addEventListeners = function () {
    const _this2 = this;

    document.querySelector('.toastjs-btn--close').addEventListener('click', () => {
        _this2._close();
    });

    if (this.options.customButtons) {
        const customButtonsElArray = Array.prototype.slice.call(document.querySelectorAll('.toastjs-btn--custom'));
        customButtonsElArray.map((el, index) => {
            el.addEventListener('click', (event) => {
                return _this2.options.customButtons[index].onClick(event);
            });
        });
    }
};

Toast.prototype._close = function () {
    const _this3 = this;

    return new Promise(((resolve, reject) => {
        _this3.toastContainerEl.setAttribute('aria-hidden', true);
        setTimeout(() => {

            _this3.toastEl.innerHTML = '';
            _this3.toastEl.classList.remove('default', 'success', 'warning', 'danger');

            if (_this3.focusedElBeforeOpen) {
                _this3.focusedElBeforeOpen.focus();
            }

            resolve();
        }, 1000);
    }));
};

Toast.prototype._open = function () {

    this.toastEl.classList.add(this.options.type);
    this.toastContainerEl.setAttribute('aria-hidden', false);

    let customButtons = '';
    if (this.options.customButtons) {
        customButtons = this.options.customButtons.map((customButton, index) => {
            return '<button type="button" class="toastjs-btn toastjs-btn--custom">' + customButton.text + '</button>';
        });
        customButtons = customButtons.join('');
    }

    this.toastEl.innerHTML = '\n        <p>' + this.options.message + '</p>\n        <button type="button" class="toastjs-btn toastjs-btn--close">Close</button>\n        ' + customButtons + '\n    ';

    this.focusedElBeforeOpen = document.activeElement;
    document.querySelector('.toastjs-btn--close').focus();
};

Toast.prototype._init = function () {
    const _this4 = this;

    Promise.resolve().then(() => {
        if (_this4.toastContainerEl) {
            return Promise.resolve();
        }
        return _this4._createElements();
    }).then(() => {
        if (_this4.toastContainerEl.getAttribute('aria-hidden') == 'false') {
            return _this4._close();
        }
        return Promise.resolve();
    }).then(() => {
        _this4._open();
        _this4._addEventListeners();
    });
};