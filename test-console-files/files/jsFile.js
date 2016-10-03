// ----------------------------- ES6 klase:

console.log('ES6 klase:');

class Randomer {
    constructor() {
        this.num = Math.round(Math.random());
    }
    rand() {
        console.log(`Slucajan broj u opsegu 0 - 10 je: ${this.num * 10}`);
    }
}

const random1 = new Randomer();
random1.rand();

class  Identifikacija {
    constructor(id) {
        this.id = id;
    }
    indentify() {
        console.log(`ID korisnika je: ${this.id}`);
    }
}

const customerId = new Identifikacija('dkjdoisk66ws');
customerId.identify();