import t from 'tcomb';

const Struktura = t.struct({
    count: t.Number,
    increment: t.Number,
    decrement: t.Number
});

export default Struktura;

