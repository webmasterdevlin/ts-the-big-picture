class Customer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    announce() {
        let forLint = "hi eslint!";
        return "Hello, my name is " + this.name;
    }
}

let firstCustomer = new Customer('Devlin');
let newMessage: string = firstCustomer.announce();

let webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage;
