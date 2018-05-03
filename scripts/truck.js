((global) => {
'use strict';

const App = global.App || {};

class Truck {
    constructor(truckId, db){
        this.truckId = truckId;
        this.db = db;
    }

    createOrder(order){
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    }
}

App.Truck = Truck;

global.App = App;

})(window)