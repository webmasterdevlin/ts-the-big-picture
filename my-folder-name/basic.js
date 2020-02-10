"use strict";
class Customer {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return "Hello, my name is " + this.name;
    }
}
let firstCustomer = new Customer('Devlin');
let newMessage = firstCustomer.announce();
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
