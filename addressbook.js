class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
        console.log(this.contacts);
    }
    deleteAt(index) {
        this.contacts.splice(1); 
    }
    print() {
        for (let contact of this.contacts) {
            console.log(contact);
        }
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const contactlist = new AddressBook(); //instance of an address book

while (true) {
    const choice = prompt("add, print, delete, or quit");
    if (choice === "add") {
        const name = prompt("Enter a name");
        const email = prompt("Enter an email");
        const phone = prompt("Enter a phone number");
        const relation = prompt("Enter a relation");
        contactlist.add(new Contact(name, email, phone, relation));
    }
    else if (choice === "print") {
        contactlist.print();
    }

    else if (choice === "delete") {

    }
    if (choice === "quit") {
        break;
    }
}

