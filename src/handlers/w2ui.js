import w2ui from './w2ui-2.0.es6';

export class 
W2Grid {
    _grid;
    constructor(options) {
        this._grid = new w2ui.w2grid(options);
    }

    get grid() {
        return this._grid;
    }
}