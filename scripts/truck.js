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

    deliverOrder(customerId){
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    }

    printOrders(){
        var customerIdArray = Object.keys(this.db.getAll());

        console.log('Truck #' + this.truckId + ' has pending orders:');
        
        customerIdArray.forEach((id) => {
            console.log(this.db.get(id));
        });
    }
}

App.Truck = Truck;

global.App = App;

})(window)