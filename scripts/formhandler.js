((global) => {
'use strict';

const App = global.App || {};
const $ = window.jQuery;

class FormHandler {
    constructor(selector){
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
    }
}

App.FormHandler = FormHandler;
global.App = App;    
   
})(window);