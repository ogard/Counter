// ----------------------- this mehanizam ---------------------------------

console.log('this mehanizam');

// -------------------- default binding:

console.log('default binding:');

function kdkd() {
    console.log(this.a)
}
var a = 2;
// const a = 2; // ne radi!
kdkd();

// -------------------- implicit binding:

console.log('implicit binding:');

function dsds() {
    console.log(this.b);
}
const obj1 = {
    b: 5,
    foo: dsds
};

obj1.foo();

// -------------------- explicit binding:

console.log('explicit binding:');

function ghgh() {
    console.log(this.c);
}
const obj2 = {
    c: 99
}

ghgh.call(obj2);
// ghgh.bind(obj2)(); moze i ovako.

// ---------------------- hard binding:

console.log('hard binding:');

function lsls(value) {
    console.log(this.d, value);
    return this.d + value;
}
const obj3 = {
    d: 66
}

const mnmn = lsls.bind(obj3);
var dd = mnmn(11);
console.log(dd);

// --------------------------- Primer1:

console.log('Primjer1:')

function identify() {
    const allCaps = this.name.toUpperCase();
    return allCaps;
}

const gost1 = {
    name: 'Janko'
}

const gost2 = {
    name: 'Marko'
}

const gostIdentify1 = identify.bind(gost1); // bindovanje zeljenog objekta
const gostIdentify2 = identify.bind(gost2); // bindovanje zeljenog objekta

const imeGosta1 = gostIdentify1(); // pozif f-je
const imeGosta2 = gostIdentify2(); // poziv f-je

console.log(imeGosta1);
console.log(imeGosta2);

// identify.call(gost1); // drugi nacin za pozivanje f-je sa bindovanim objektom
// identify.call(gost2); // drugi nacin za pozivanje f-je sa bindovanim objektom

function speak() {
    const ime = identify.bind(this);
    // nopodno bindovati this, kako bi f-ja identify znala da se radi o objektu koji je bindovan za f-ju speak
    const greeting = 'Pozdrav, ja sam ' + ime();
    return greeting;
    // const greeting = 'Pozdrav, ja sam ' + identify.call(this); // drugi nacin 
}

const speakGost1 = speak.bind(gost1);
const speakGost2 = speak.bind(gost2);

const pozdrav1 = speakGost1(); // poziv f-je
const pozdrav2 = speakGost2(); // poziv f-je

console.log(pozdrav1);
console.log(pozdrav2);

// --------------------Primer2:

console.log('Primjer2:');

function foo(num) {
    console.log('foo' + num);
    this.count++;
}
foo.count = 0;
for (let i=0; i<10; i++) {
    if(i > 5) {
        // foo(i); // ne radi!
        // foo.call(foo, i); // prvi nacin
        foo.bind(foo)(i); // drugoi nacin
    }
}
console.log(foo.count);

// ----------------------------- new mehanizam -----------------------------

console.log('new mehanizam:');

function lolo(inputValue) {
    this.k = inputValue;
}

var object1 = {
    func: lolo
};

object1.func(536);
console.log(object1.k);

var object2 = new object1.func(537);
console.log(object2.k);
console.log('Prototip objekta 2 je:');
console.log('prvi nacin:');
console.log(object2.__proto__);
console.log('drugi nacin:')
console.log(object2.constructor.prototype);



