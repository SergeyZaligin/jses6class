((global) => {
'use strict';

const App = global.App || {};
const $ = global.jQuery;

class FormHandler {
    constructor(selector){
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);

        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    addSubmitHandler(){
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function (event)  {
            event.preventDefault();
            const data = $(this).serializeArray();
            console.log('submit');
            console.log(data);
        });
    }
}

App.FormHandler = FormHandler;
global.App = App;    
   
})(window);