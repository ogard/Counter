// ------------------ Prototype mehanizam ------------------------

console.log('Prototype mehanizam');

// ----------- Primjer1 - Object.create:

console.log('Primjer1 - Object.create:')

var sourceObjekat = {
    a: 2
};

console.log(sourceObjekat.__proto__); // prvi prototip kreiranog objekta je Object
console.log(Object.getPrototypeOf(sourceObjekat)); // // izvorni prototip kreiranog objekta je Object
console.log(sourceObjekat.constructor === Object); // Veza

var noviObjekat1 = Object.create(sourceObjekat);
/* kreira se novi objekat koji je [[Prototype]] linkovan sa objektom koji mu se prosledjuje*/

console.log(noviObjekat1.__proto__); // prvi prototip kreiranog objekta je sourceObjekat
console.log(Object.getPrototypeOf(sourceObjekat)); // izvorni prototip kreiranog objekta je Object
console.log(noviObjekat1.constructor.prototype); // drugi nacin za dolazak do izvornog prototipa

console.log(`source objekat property a: ${sourceObjekat.a}`);
console.log(`child objekat: ${JSON.stringify(noviObjekat1)}`); // novi objekat nema nikakve propertije
console.log(`child objekat property a: ${noviObjekat1.a}`); // ovo nije properti novog objekta, vec link do starog

noviObjekat1.a++; // implicit shadowing
console.log(`child objekat: ${JSON.stringify(noviObjekat1)}`); // novi objekat sada ima property a

// -------------- Primjer2 - new:

console.log('Primjer2 - new:');

function ConstructorFunc(ime) {
    this.ime = ime;
    ime = ime.toUpperCase();
    console.log(`Moje ime je ${ime}`);
}

ConstructorFunc.prototype.proizvod = function(a, b) {
    return a * b;
}

var noviObjekat2 = new ConstructorFunc('Janko'); // constructor call
/* 
    kreira se novi objekat koji je [[Prototype]] linkovan sa parent objektom (u ovom slucaju f-jom ConstructorFunc),
    novonapravljeni objekat je bindovan za parent objekat (u ovo slucaju f-ju ConstrustorFunc) kao njegov this
    parent objektu se pristupa na sledeci nacin: ConstructorFunc.prototype
*/

var proizvodBrojeva = noviObjekat2.proizvod(2, 3);
console.log(proizvodBrojeva);
console.log(noviObjekat2.hasOwnProperty('proizvod')); // noviObjekat2 nema svoj properti proizvod
console.log(ConstructorFunc.prototype.hasOwnProperty('proizvod')); // parent od noviObjekat2 (u ovom slucaju ConstructorFunc) ima properti proizvod


// ----------------- Primjer3 - new:

console.log('Primjer3 - new:');

function Foo(name) {
    this.name = name;
}

Foo.prototype.identify = function() {
    return `Ja sam ${this.name}`;
};

function Bar(name) {
    this.name = name;
    Foo(name);
    // Foo.call( this, name );
}

Bar.prototype = Object.create( Foo.prototype ); // Bar.prototype je linkovan za Foo.prototype

// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!

Bar.prototype.speak = function() {
    return this.identify();
};

var a1 = new Foo('Marko');
var b1 = new Bar('Janko');

console.log(a1.identify());
console.log(b1.speak());


// var a = new Bar( "a", "obj a" );

// a.myName(); // "a"
// a.myLabel(); // "obj a"