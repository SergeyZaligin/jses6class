((global) => {
'use strict';

const App = global.App || {};

class DataStore {

    constructor() {
        this.data = {};
    }

    add (key, val) {
        this.data[key] = val;
    }

    get (key) {
        return this.data[key];
    }

    getAll () {
        return this.data;
    }

    remove (key) {
        delete this.data[key];
    }
}

App.DataStore = DataStore;

global.App = App;

})(window);