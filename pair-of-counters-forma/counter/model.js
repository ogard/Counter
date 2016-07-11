import t from 'tcomb';

const Model = t.struct({
    count: t.Number,
    increment: t.Number,
    decrement: t.Number
});

let opcije = {
    fields: {
        count: {
            label: 'Vrednost brojača je: ',
            disabled: true
        },
        increment: {
            label: 'Inkrementiraj za: '
        },
        decrement: {
            label: 'Dekrementiraj za: '
        }
    }
}

export {Model, opcije};